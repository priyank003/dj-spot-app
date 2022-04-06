import React from "react";

import playStoreLogo from "../../../assets/Google Play logo.png";
import appleStoreLogo from "../../../assets/_Group_.png";

import "./Navbar.css";

import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <div className="app__navbar-link">Sign up as Dj</div>
        <div className="app__navbar-link">Login</div>
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
  );
}
