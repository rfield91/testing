import React from "react";
import ReactDOM from "react-dom";
import PaxCalculator from "./components/PaxCalculator";
const paxValues = require("./data/paxvalues.json");

ReactDOM.render(
  <PaxCalculator paxValues={paxValues} />,
  document.getElementById("app")
);
