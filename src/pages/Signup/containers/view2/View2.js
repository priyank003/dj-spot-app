import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Formbutton from "../../component/Formbutton";

import "./View2.css";

export default function View2() {
  return (
    <div className="app__signup-form-container ">
      <Link to="/signup" className="app__signup-back-btn">
        <div className="app__signup-back-btn mb-3">
          <div className="app__signup-back-icon "></div>
          Back
        </div>
      </Link>
      <Form className="signup__form">
        <div className="app__signup-header">
          <h3>Welcome DJ</h3>
          <h1>How about a plug?</h1>
        </div>
        <Form.Group className="mb-3 form__group" controlId="formSoundcloudlink">
          <Form.Label>Soundcloud link</Form.Label>
          <Form.Control type="url" placeholder="soundcloud.com" />
        </Form.Group>

        <Form.Group className="mb-3 form__group" controlId="formSpotifylink">
          <Form.Label>Spotify link</Form.Label>
          <Form.Control type="url" placeholder="spotify.com" />
        </Form.Group>
        <Form.Group className="mb-3 form__group" controlId="formYoutubelink">
          <Form.Label>Youtube link</Form.Label>
          <Form.Control type="url" placeholder="Youtube.com" />
        </Form.Group>

        <Formbutton
          type="submit"
          style={{
            background: "#616161",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Next
        </Formbutton>
        <Formbutton
          style={{
            background: "#C4C4C4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Skip
        </Formbutton>
      </Form>
    </div>
  );
}
