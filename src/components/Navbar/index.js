import React from "react";
import "./style.css";

export default function Navbar(props) {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>
            <a href="/">Memory Game</a>
          </li>
          <li
            className={
              props.message.indexOf("Wrong") !== -1
                ? "incorrectMessage"
                : props.message.indexOf("Right") !== -1
                ? "correctMessage"
                : "normalMessage"
            }
          >
            {props.message}
          </li>
          <li>
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </div>
    </div>
  );
}
