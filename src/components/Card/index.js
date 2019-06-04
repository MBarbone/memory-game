import React from "react";
import "./style.css";

export default function Card(props) {
  return (
    <div>
      <div className="container">
        <div className="card">
          <img
            src={require("../../img/" + props.imageUrl)}
            className="img-fluid"
            alt={props.imageUrl}
          />
        </div>
      </div>
    </div>
  );
}
