import React from "react";
import "./style.css";

export default function CardContainer(props) {
  return <div className="container">{props.children}</div>;
}
