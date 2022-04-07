import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./FeatureBox.css";

export default function FeatureBox(props) {
  return (
    <div className={`app__feature-div ${props.className} `}>
      <div className="app__feature-icon"></div>

      <h2 className="app__feature-div-header">{props.header}</h2>

      <p>{props.info}</p>
      <div className="app__feature-div-nav">
        <p>Know more</p>
        <AiOutlineArrowRight
          fontWeight={2000}
          strokeWidth="50"
          style={{ fontSize: "1.2rem" }}
        />
      </div>
    </div>
  );
}
