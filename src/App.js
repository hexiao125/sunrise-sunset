import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";
import locations from "./locations.json";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [timeResult, setTimeResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let resultObj = {};
    let formattedDate = date.toISOString().slice(0, -14);

    const fetchData = async location => {
      const { name, lat, lng } = location;
      const response = await axios(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${formattedDate}`
      );
      resultObj[name] = [
        response.data.results.sunrise,
        response.data.results.sunset
      ];
    };

    const fetchAllData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        await Promise.all(locations.map(fetchData));
        setTimeResult(resultObj);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchAllData();
  }, [date]);

  const handleDateChange = date => {
    setDate(date);
  };

  return (
    <div className="App">
      <DatePicker
        aria-label="date"
        selected={date}
        onChange={handleDateChange}
      />
      {isError && <div>Oops! Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <dl>
          {Object.entries(timeResult).map(([key, value]) => {
            return (
              <Fragment key={key}>
                <dt>{key}</dt>
                <dd>
                  <span role="img" aria-label="sunrise">
                    🌅
                  </span>
                  {value[0]}
                </dd>
                <dd>
                  <span role="img" aria-label="sunset">
                    🌄
                  </span>
                  {value[1]}
                </dd>
              </Fragment>
            );
          })}
        </dl>
      )}
    </div>
  );
}
