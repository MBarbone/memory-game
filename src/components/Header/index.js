import React from "react";
import "./style.css";

export default class Header extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="navbar align-middle">
          <a href="#home">Memory Game</a>
          <a href="#search">Click an Image to Begin</a>
          <a href="#signOut">Sign Out</a>
        </div>
      </div>
    );
  }
}
