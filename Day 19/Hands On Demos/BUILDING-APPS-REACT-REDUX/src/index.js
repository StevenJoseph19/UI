import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";

// myglobal = 4;

// function Hi() {
//   //   debugger; // eslint-disable-line no-debugger

//   return <p>Hi.</p>;
// }

render(
  <Router>
    <App />
  </Router>,

  document.getElementById("app")
);
