import { useState, useEffect } from "react";
import axios from "axios";

const SunRiseSetApi = (date, locations) => {
  const [data, setData] = useState({});
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
        setData(resultObj);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchAllData();
  }, [date, locations]);

  return { data, isLoading, isError };
};

export default SunRiseSetApi;
