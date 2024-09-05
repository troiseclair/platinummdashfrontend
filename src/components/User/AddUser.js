import React, { useContext, useEffect, useState } from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import UploadFile from "../UploadFile";

export default function AddUser() {
  const { nightMode, day, night } = useContext(LayoutContext);
  const mode = nightMode ? night : day;

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState(8);
  const [email, setEmail] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(name);
    console.log(gender);
    console.log(birthDate);
    console.log(phone);
    console.log(email);
    console.log(hireDate);
    console.log(position);
  }, [name, gender, birthDate, phone, email, hireDate, position]);

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://52.221.24.81:3108/User", {
        name,
        gender,
        birthDate,
        phone,
        email,
        hireDate,
        position,
        image,
      });
      navigate("/User");
    } catch (error) {
      console.log(error);
    }
  };

  function handleImage(imgUrl) {
    setImage(imgUrl);
  }
  function handleImageMsg(imgMsg) {
    setMsg(imgMsg);
  }

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
          <div className="card my-5 w-50">
            <div
              className={`card-body ${
                mode === day ? "bg-primary-subtle" : "bg-dark"
              }`}
              style={{
                color: mode.color,
              }}
            >
              <h5 className="card-title">Add New User</h5>
              <form
                onSubmit={addUser}
                className="row g-3 needs-validation"
                noValidate
              >
                {/* Input Photo */}
                <div className="col-md-12">
                  <label htmlFor="position" className="form-label">
                    Photo User
                  </label>
                  <UploadFile
                    imageData={handleImage}
                    imageMessage={handleImageMsg}
                  />
                  <small>{`${msg}`}</small>
                </div>
                {/* from fullname */}
                <div className="col-md-12">
                  <label htmlFor="name" className="form-label">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    minLength={3}
                    required
                  />
                </div>
                {/* birth date : date picker */}
                <div className="col-md-6">
                  <label htmlFor="birthDate" className="form-label">
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthDate"
                    data-testid="birth-date"
                    name="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                  />
                </div>
                {/* radio button gender */}
                <div className="col-md-6">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender"
                      value={"Laki-laki"}
                      onClick={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="radioLaki">
                      Laki-laki
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender"
                      value={"Perempuan"}
                      onClick={(e) => setGender(e.target.value)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radioPerempuan"
                    >
                      Perempuan
                    </label>
                  </div>
                </div>
                {/* form input phone number */}
                <div className="col-md-12">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phoneNumber"
                    data-testid="phone-number"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      if (e.target.value <= 0) {
                        setPhone(8);
                      } else {
                        setPhone(e.target.value);
                      }
                    }}
                    required
                  />
                </div>
                {/* email */}
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {/* hire date : date picker */}
                <div className="col-md-6">
                  <label htmlFor="hireDate" className="form-label">
                    Hire Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="hireDate"
                    name="hireDate"
                    value={hireDate}
                    onChange={(e) => setHireDate(e.target.value)}
                    required
                  />
                </div>
                {/* select position */}
                <div className="col-md-6">
                  <label htmlFor="position" className="form-label">
                    Position
                  </label>
                  <select
                    className="form-select"
                    id="position"
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                  >
                    <option value="-">Pilih Position</option>
                    <option value="Admin">Admin</option>
                    <option value="HRD">HRD</option>
                    <option value="Kasir">Kasir</option>
                    <option value="Store Crew">Store Crew</option>
                  </select>
                </div>
                <div className="col-12">
                  <button
                    className={`btn mt-2 ${
                      mode === day ? "btn-success" : "btn-light"
                    }`}
                    type="submit"
                  >
                    Simpan
                  </button>
                  <Link to={"/User"} className="btn btn-danger mt-2 ms-2">
                    Batal
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
