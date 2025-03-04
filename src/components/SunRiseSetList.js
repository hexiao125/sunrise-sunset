import React from "react";
import SunRiseSetDetail from "./SunRiseSetDetail";

const SunRiseSetList = ({ data }) => {
  return (
    <dl>
      {Object.entries(data).map(([key, value]) => {
        return (
          <SunRiseSetDetail
            key={key}
            city={key}
            sunrise={value.sunrise}
            sunset={value.sunset}
          />
        );
      })}
    </dl>
  );
};

export default SunRiseSetList;
