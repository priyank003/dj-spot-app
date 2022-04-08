import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { CustomButton } from "../../../../shared/Ui";
import Formbutton from "../../component/Formbutton";
import googleLogo from "../../../../assets/iconfinder_Google_1298745 1.png";

import "./View1.css";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),

  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),

  remember: yup.bool(),
});

export default function View1() {
  //   const [validated, setValidated] = useState(false);

  //   const handleSubmit = (event) => {
  //     const form = event.currentTarget;
  //     if (form.checkValidity() === false) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //     }

  //     setValidated(true);
  //   };
  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={schema}
      initialValues={{
        email: "",
        password: "",
        remember: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className="signup__form">
          <div className="app__signup-header">
            <h3>Welcome DJ</h3>
            <h1>Let’s get you started</h1>
          </div>
          <Form.Group className="mb-3 form__group" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="mb-3 form__group"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isValid={touched.password && !errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Row style={{ width: "100%", alignItems: "center" }} className="mb-3">
            <Form.Group controlId="formBasiccheckbox" style={{ flex: "1" }}>
              <Form.Check
                type="checkbox"
                label="Remember me"
                className="signup__form-radio"
                name="remember"
                value={values.remember}
                onChange={handleChange}
                isValid={touched.remember && !errors.remember}
              />
            </Form.Group>
            <Link to="/resetpswd" style={{ flex: "1" }}>
              <p style={{ margin: "0", padding: "0", color: "#2C5282" }}>
                {" "}
                Forget Password ?
              </p>
            </Link>
          </Row>
          <Link to="/signup/view2" style={{ width: "100%" }}>
            <Formbutton type="submit" style={{ background: "#111827" }}>
              Register now
            </Formbutton>
          </Link>
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

          <div className="signup__form-footer">
            <p>Already a member ?</p>{" "}
            <Link to="/login">
              <span style={{ color: "#2C5282", marginLeft: "10px" }}>
                Login here
              </span>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
