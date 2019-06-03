import React from "react";
import "./style.css";

export default class Header extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#home">Memory Game</a>
            </li>
            <li>Click an Image to Begin</li>
            <li>Score: 0 | Top High Score: 0</li>
          </ul>
        </div>
      </div>
    );
  }
}
