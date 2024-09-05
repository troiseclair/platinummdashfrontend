import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "../context/LayoutContext";

export default function Login() {
  const { handleLoggedIn } = useContext(LayoutContext);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const onInputChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };
  const storeToLocaleStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://52.221.24.81:3108/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response", response);
      if (response.ok) {
        const user = await response.json();
        console.log("user response", user);
        storeToLocaleStorage(user);
        handleLoggedIn();
        navigate("/dashboard");
      } else {
        throw new Error(response.statusText);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <main id="login" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col">
              <div id="login-card" className="card">
                <a
                  href="/"
                  className="btn btn-warning m-2"
                  style={{ height: "40px", width: "40px" }}
                  data-testid="btn-home"
                >
                  <img src="/images/home-icon.png" alt="home-icon" />
                </a>
                <div className="card-body">
                  <form onSubmit={onHandleSubmit}>
                    <div className="py-3">
                      <img
                        src="/images/logo-1.png"
                        className="card-img-top px-5"
                        alt="Logo images"
                      />
                      <h1 className="text-center fw-bold mt-3">Login</h1>
                      <div className="mb-2 form-floating">
                        <input
                          type="text"
                          id="username"
                          name="username"
                          data-testid="username"
                          className="form-control shadow-sm"
                          placeholder="Username"
                          onChange={onInputChange}
                          required
                        />
                        <label
                          htmlFor="username"
                          className="form-label text-body-tertiary"
                        >
                          Username
                        </label>
                      </div>
                      <div className="mb-2 form-floating">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          data-testid="password"
                          className="form-control shadow-sm mb-3"
                          placeholder="Password"
                          onChange={onInputChange}
                          required
                        />
                        <label
                          htmlFor="password"
                          className="form-label text-body-tertiary"
                        >
                          Password
                        </label>
                      </div>
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-block btn-dark fw-bold fs-5 shadow-sm"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
