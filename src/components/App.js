import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import locations from "../locations.json";
import SunRiseSetList from "./SunRiseSetList";
import SunRiseSetApi from "../apis/SunRiseSetApi";

export default function App() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = date => {
    setDate(date);
  };

  const { data, isLoading, isError } = SunRiseSetApi(date, locations);

  return (
    <div className="App">
      <DatePicker
        aria-label="date"
        selected={date}
        onChange={handleDateChange}
      />
      {isError && <div>Oops! Something went wrong ...</div>}
      {isLoading ? <div>Loading ...</div> : <SunRiseSetList data={data} />}
    </div>
  );
}
