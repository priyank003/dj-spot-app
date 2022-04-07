import React from "react";
import { Container, Row } from "react-bootstrap";
import FeatureBox from "./Featurebox/FeatureBox";

import "./Features.css";

export default function Features() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Container className="app__wrapper app__feature">
        <div className="app__feature-header" style={{ marginTop: "3rem" }}>
          <h1>Exciting features</h1>
        </div>
        <div className="app__feature-grid">
          <Row>
            <FeatureBox
              className="col-4"
              header="Set your fees"
              info="Be your own boss and set your booking fee, cancellations, and much more. No hidden rates. "
            />
            <FeatureBox
              className="col-4"
              header="Own your schedule"
              info="Never miss a booking or upcoming gig with our efficient layout that keeps you on top of things. "
            />
            <FeatureBox
              className="col-4"
              header="Share your sound"
              info="Never miss a booking or upcoming gig with our efficient layout that keeps you on top of things. "
            />
          </Row>
          <Row>
            <FeatureBox
              className="col-4"
              header="Know your metrics"
              info="We monitor everything, reviews, payments, bookings, leeds. We’ve got you covered. "
            />
            <FeatureBox
              className="col-4"
              header="Build your community"
              info="Your timeline, your choice. Share your most amazing moments with your peers. "
            />
            <FeatureBox
              className="col-4"
              header="Know your doe"
              info="Our digital waller protects your money, "
            />
          </Row>
        </div>
      </Container>
    </div>
  );
}
