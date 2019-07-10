import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

export default function Instructions() {
  return (
    <div className="Instructions">
      <div>
        <h1>Hello!</h1>
        <p>Welcome to the Looklet front-end take-home test!</p>
        <h2>Test Instructions</h2>
        <h3>The Challenge</h3>
        <p>
          Looklet has offices, customers and partners spread out over the world.
        </p>
        <p>
          Keeping track of timezones is a continous challenge, and, of course,
          we don't want to wake our friends up unnecessarily!
        </p>
        <p>
          The objective is to create an easy to use application that show the
          sunrise and sunset in different cities across the world.
        </p>
        <p>
          To achieve this, we need to be able to select a date of the year, and
          view a list of cities and their respective sunrise and sunset times.
        </p>
        <p>The places we need to know the sunrise/sunset of are:</p>{" "}
        <ul>
          <li>Toronto, CA</li>
          <li>Texas, USA</li>
          <li>New York, USA</li>
          <li>Pennsylvania, USA</li>
          <li>California, USA</li>
          <li>Sweden</li>
          <li>Germany</li>
          <li>France</li>
          <li>Sri Lanka</li>
          <li>Vietnam</li>
        </ul>
        <h3>Helpful APIs</h3>
        <p>
          There is a very helpful Sunrise/sunset service available at{" "}
          <a href="https://sunrise-sunset.org/api"> sunrise-sunset.org</a> that
          we suggest that you use. We've also added a file
          <tt>locations.json</tt> with <em>location to latitude/longlitude</em>{" "}
          mapping for your convenience.
        </p>
        <h3>End Result Example </h3>
        <em>
          This example below is an formatting example, it is lacking the
          required functionality.
        </em>
        <div>
          <DatePicker aria-label="date" />
          <dl>
            <dt>New York</dt>
            <dd>
              <span role="img" aria-label="sunrise">
                🌅
              </span>
              9:26:35 AM
            </dd>
            <dd>
              <span role="img" aria-label="sunset">
                🌄
              </span>
              12:31:23 AM
            </dd>
            <dt>Stockholm</dt>
            <dd>
              <span role="img" aria-label="sunrise">
                🌅
              </span>
              1:33:06 AM
            </dd>
            <dd>
              <span role="img" aria-label="sunset">
                🌄
              </span>
              8:08:10 PM
            </dd>
          </dl>
        </div>
        <h3>Submission requirements</h3>
        <p>
          <b>Anonymize Your Results</b>
          <br />
          <br />
          At Looklet, we value fairness highly.
          <br />
          When reviewing the submitted tests, we want to ensure that we are free
          from bias. To achieve this, we want the tests to be anonymized.
          <br />
          Ensure the test is anonymized (does not contain any information that
          would mean that a reviewer could easily identify you, or anything
          personal about you)
        </p>
        <p>
          <b>Create a .zip File through Codesandbox.io</b>
          <br />
          <br />
          To make it easier for you and for our reviewers, we ask you to, when
          you are ready to submit the result that you create a .zip file through
          codesandbox.io <br />
          To do so, put your solution in codebox.io (now is a good time to
          verify the solution one last time) and then go to{" "}
          <tt>File -> Export to zip</tt>
        </p>
        <p>
          <b>Do Not Share The Test nor Your Results </b>
          <br />
          <br />
          Please don't share the tests nor your results publicly.
        </p>
        <p>
          Lastly, for your convenience, this codebox has a react skeleton you
          may use. <tt>index.js</tt> contains: <br />
          <br />
          <tt>const rootElement = document.getElementById("sunRiseSetApp");</tt>
          <br />
          <tt>ReactDOM.render(&lt;App /&gt;, rootElement);</tt>
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
