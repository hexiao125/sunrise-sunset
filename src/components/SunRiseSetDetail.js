import React, { Fragment } from "react";

const SunRiseSetDetail = ({ city, sunrise, sunset }) => {
  return (
    <Fragment>
      <dt>{city}</dt>
      <dd>
        <span role="img" aria-label="sunrise">
          🌅
        </span>
        {sunrise}
      </dd>
      <dd>
        <span role="img" aria-label="sunset">
          🌄
        </span>
        {sunset}
      </dd>
    </Fragment>
  );
};

export default SunRiseSetDetail;
