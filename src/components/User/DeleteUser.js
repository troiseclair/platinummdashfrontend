import React, { useContext } from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DeleteUser() {
  const { nightMode, day, night } = useContext(LayoutContext);
  const mode = nightMode ? night : day;
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3108/user/delete/${id}`);
      navigate("/User");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main
        className="d-flex align-items-center"
        style={{
          backgroundColor: mode.background,
          color: mode.color,
        }}
      >
        <div className="container d-flex justify-content-center">
          <div className="card w-50">
            <div
              className={`card-body ${
                mode === day ? "bg-primary-subtle" : "bg-dark"
              }`}
              style={{
                color: mode.color,
              }}
            >
              <h5 className="card-title">Hapus Data Karyawan</h5>
              <p>{`Apakah Anda Ingin Menghapus Data Karyawan Dengan ID ${id}`}</p>
              <button onClick={() => deleteData(id)} className="btn btn-danger">
                Delete
              </button>
              <Link to={"/User"} className="btn btn-secondary ms-2">
                Batal
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
