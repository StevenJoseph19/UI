import React, { Component } from "react";
import "./myheader.css";

class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "Dodger Blue",
      padding: "10px",
      fontFamily: "Calibri",
    };
    return (
      <div>
        <h1 style={mystyle}>Hello Style!</h1>
        <p> Add a little style!</p>
      </div>
    );
  }
}

export default MyHeader;
