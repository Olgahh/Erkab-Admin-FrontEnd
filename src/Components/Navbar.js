import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import AuthButton from "./AuthButton";
import logo from "../images/logo.png";

class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" className="bg-light">
          <Navbar.Brand>
            <Link to={"/dashboard"} className="navbar-brand">
              <img className="logo mr-3" src={logo} alt="erkablogo" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <span
                className="nav-item nav-link font-weight-bold"
                style={{ color: "#008db3", fontSize: "1.5rem" }}
              >
                Admin Page
              </span>
            </Nav>
            <Nav className="ml-auto">
              <AuthButton />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default NavBar;
