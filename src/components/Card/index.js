import React from "react";
import "./style.css";

export default function Card(props) {
  return (
    <img
      src={require("../../img/" + props.imageUrl)}
      className="img-fluid img-thumbnail"
      alt={props.imageUrl}
      onClick={() => props.guessImage(props.id)}
    />
  );
}
