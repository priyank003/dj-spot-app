import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import playStoreLogo from "../../../assets/Google Play logo.png";
import appleStoreLogo from "../../../assets/_Group_.png";

import "./Navbar.css";

export default function Navbar() {
  return (
    <Container>
      <div className="app__navbar">
        <div className="app__navbar-links">
          <Link to="/signup">
            <div className="app__navbar-link">Sign up as Dj</div>
          </Link>
          <Link to="/login">
            <div className="app__navbar-link">Login</div>
          </Link>
        </div>

        <div className="app__navbar-store">
          <div className="store__link-div">
            <div className="store__link-logo">
              <img src={playStoreLogo} alt="play store logo" />
            </div>
            <div className="store__link-desc">
              <p>GET IT ON </p>
              <h1>Google Play</h1>
            </div>
          </div>
          <div className="store__link-div">
            <div className="store__link-logo">
              <img src={appleStoreLogo} alt="play store logo" />
            </div>
            <div className="store__link-desc">
              <p>Download on the </p>
              <h1>App Store</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
