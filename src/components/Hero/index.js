import React from "react";
import "./style.css";

export default function Hero() {
  return (
    <div>
      <div className="header text-center">
        <div className="instruction-container">
          <h1 className="header-text">Memory Game</h1>
          <h3 className="header-text">
            Click on an image to earn points, but don't click on any more than
            once!
          </h3>
        </div>
      </div>
    </div>
  );
}
