import React from "react";

import { Form, Button } from "react-bootstrap";
import { CustomButton } from "../../../../shared/Ui";
import Formbutton from "../../component/Formbutton";
import googleLogo from "../../../../assets/iconfinder_Google_1298745 1.png";

import "./View1.css";

export default function View1() {
  return (
    <Form style={{ width: "100%" }} className="signup__form">
      <div className="app__signup-header">
        <h3>Welcome DJ</h3>
        <h1>Let’s get you started</h1>
      </div>
      <Form.Group className="mb-3 form__group" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 form__group" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRadio">
        <Form.Check
          type="radio"
          label="Remember me"
          className="signup__form-radio"
        />
      </Form.Group>
      <Formbutton type="submit" style={{ background: "#111827" }}>
        Register now
      </Formbutton>
      <Formbutton
        type="submit"
        style={{
          background: "#2D3748",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <div className="form__submit-logo flex__center">
          <img
            src={googleLogo}
            alt="google logo"
            style={{ marginRight: "10px" }}
          />
        </div>
        Or sign-up with google
      </Formbutton>

      {/* <CustomButton
        type="submit"
        style={{ width: "100%", margin: "5px 0", borderRadius: "20px" }}
      >
        Or sign-up with google
      </CustomButton> */}
    </Form>
  );
}
