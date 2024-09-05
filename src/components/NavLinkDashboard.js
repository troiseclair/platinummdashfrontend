import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LayoutContext } from "../context/LayoutContext";
import Toggle from "./Toggle";

export default function NavLinkDashboard() {
  const { nightMode, day, night } = useContext(LayoutContext);
  const mode = nightMode ? night : day;

  const handleLogout = () => {
    localStorage.clear();
    console.log("Local Storage", localStorage);
  };

  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          {/* ===== Comment/NonAktifkan Element list Jika Melakukan Test ===== */}
          <li className="nav-item me-3">
            <Link to={"/dashboard"} className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to={"/user"} className="nav-link">
              User
            </Link>
          </li>
          <li className="nav-item me-3">
            <Toggle />
          </li>
        </ul>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-outline-danger"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i className="fas fa-sign-out-alt me-2"></i>Logout
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{ backgroundColor: mode.background, color: mode.color }}
            >
              <div className="modal-body">
                Apakah ada ingin keluar aplikasi?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Batal
                </button>
                <form onSubmit={handleLogout}>
                  <button className="btn btn-outline-danger" type="submit">
                    Log Out
                  </button>
                </form>
              </div>
            </div>
            {/* <!-- End modal-content --> */}
          </div>
          {/* <!-- End modal-dialog --> */}
        </div>
        {/* <!-- End modal --> */}
      </div>
    </>
  );
}
