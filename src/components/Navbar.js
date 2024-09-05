import React from "react";
import NavLinkDashboard from "./NavLinkDashboard";
import NavLinkHome from "./NavLinkHome";

export default function Navbar() {
  const pathLocation = window.location.pathname;
  let navbarLink;

  if (pathLocation === "/") {
    navbarLink = <NavLinkHome />;
  } else {
    navbarLink = <NavLinkDashboard />;
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid mx-5 mt-2">
          <a href="#" className="navbar-brand">
            <img src="/images/logo-1.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Link */}
          {navbarLink}
        </div>
      </nav>
    </>
  );
}