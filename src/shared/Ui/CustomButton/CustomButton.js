import React from "react";

import { Button } from "react-bootstrap";
import "./CustomButton.css";
export default function CustomButton(props) {
  return (
    <Button className="app__custom-btn" style={props.style}>
      {props.children}
    </Button>
  );
}
