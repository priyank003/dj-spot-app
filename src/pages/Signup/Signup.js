import React from "react";
import { Container } from "react-bootstrap";
import View1 from "./containers/view1/View1";
import View2 from "./containers/view2/View2";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import "./Signup.css";

export default function Signup() {
  return (
    <div className="app__signup app__wrapper">
      <div className="app__signup-img"></div>
      <Container className="app__signup-form">
        <Outlet />
      </Container>
    </div>
  );
}
