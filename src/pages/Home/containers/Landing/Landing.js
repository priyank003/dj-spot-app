import React from "react";
import { Container } from "react-bootstrap";
import { CustomButton } from "../../../../shared/Ui";
import { AiOutlinePlayCircle } from "react-icons/ai";

import "./Landing.css";

export default function Landing() {
  return (
    <Container className="app__wrapper app__landing">
      <div className="app__landing-info">
        <h1>We can get you to the spot.</h1>
        <p>
          Play the mixes while we handle your business. A trusted Dj booking app
          that brings the party to you.{" "}
        </p>
        <div className="app__landing-nav">
          <CustomButton style={{ background: "#111827" }}>
            Get started
          </CustomButton>
          <div className="app__landing-nav-demo">
            <AiOutlinePlayCircle fontSize={23} />
            <p>Demo Video</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
