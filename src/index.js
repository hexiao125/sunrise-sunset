import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import App from "./components/App";
import Instructions from "./Instructions";

function Root() {
  return (
    <div className="Root">
      <App />
      <Instructions />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
