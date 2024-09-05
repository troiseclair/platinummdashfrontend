import React from "react";
import { Link } from "react-router-dom";

export default function NavLinkHome() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li className="nav-item me-4">
            <a className="nav-link fw-bold" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item me-4">
            <a className="nav-link" href="#about-us">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <a className="btn btn-dark text-light px-4 fw-semibold" href="/login">
          <i className="fas fa-sign-in-alt me-2"></i>Login
        </a>
      </div>
    </>
  );
}
