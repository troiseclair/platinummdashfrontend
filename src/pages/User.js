import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { LayoutContext } from "../context/LayoutContext";
import TableUser from "../components/User/TableUser";
import { Link } from "react-router-dom";

export default function User(props) {
  const { nightMode, day, night } = useContext(LayoutContext);
  const mode = nightMode ? night : day;

  return (
    <>
      <div style={{ backgroundColor: mode.background, color: mode.color }}>
        <Navbar />
        {/* Main Content */}
        <main className="container mt-3">
          <h2 className="mt-5 mb-3">Data Karyawan</h2>
          <Link to={"addUser"} className="btn btn-sm btn-success">
            Add New
          </Link>
          {/* Table Data */}
          <TableUser mode={mode} day={day} userLogin={props} />
        </main>
      </div>
    </>
  );
}
