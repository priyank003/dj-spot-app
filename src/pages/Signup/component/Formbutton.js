import React from "react";

import { CustomButton } from "../../../shared/Ui";

export default function Formbutton(props) {
  return (
    <CustomButton
      type={props.type}
      style={{
        ...props.style,
        width: "100%",
        margin: "5px 0",
        borderRadius: "20px",
      }}
    >
      {props.children}
    </CustomButton>
  );
}
