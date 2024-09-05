import React from "react";
import { Link } from "react-router-dom";

export default function NavLinkHome() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        </ul>
        <a className="btn btn-dark text-light px-4 fw-semibold" href="/login">
          <i className="fas fa-sign-in-alt me-2"></i>Login
        </a>
      </div>
    </>
  );
}
