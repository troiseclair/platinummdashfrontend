import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { LayoutContext } from "../context/LayoutContext";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Dashboard(props) {
  const { isLoggedIn, handleLoggedIn } = useContext(LayoutContext);
  const { nightMode, day, night } = useContext(LayoutContext);
  const mode = nightMode ? night : day;

  const [products, setUser] = useState([]);
  const [info, setInfo] = useState([]);
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [position, setPosition] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
    getInfo();
    getUser();
    // console.log("info", info);
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://52.221.24.81:3108/dashboard", {
        headers: {
          Authorization: props.user.accessToken,
        },
      });
      // console.log("response", response);
      if (response.ok) {
        const dataUsers = await response.json();
        setUsers(dataUsers);
      } else {
        localStorage.clear();
        navigate("/dashboard");
        handleLoggedIn();
      }
    } catch (e) {
      // console.error(e);
    }
  };

  const getInfo = async () => {
    try {
      await axios
        .get("http://52.221.24.81:3108/dashboard", {
          headers: {
            Authorization: props.user.accessToken,
          },
        })
        .then((res) => {
          setInfo(res.data);
          setUserId(res.data.dataUser.id);
          setUsername(res.data.dataUser.username);
          setFullname(res.data.dataUser.name);
          setPosition(res.data.dataUser.position);
        });
    } catch (error) {
      // console.log(error);
    }
  };

  const getUser = async () => {
    try {
      await axios
        .get("http://localhost/User", {
          headers: {
            Authorization: props.user.accessToken,
          },
        })
        .then((res) => {
          setUser(res.data.data);
        });
    } catch (error) {
      // console.log(error);
    }
  };

  function numFormat(num) {
    let newFormat = new Intl.NumberFormat().format(num);
    return newFormat;
  }

  return (
    <>
      <div style={{ backgroundColor: mode.background, color: mode.color }}>
        <Navbar />
        <main className="container mt-3">
          <div className="row mt-5">
            <div className="col-10">
              <h1 className="ps-2">Selamat Datang, {info.name}</h1>
            </div>
          </div>
          {/* Table Data */}
          <div className="container mt-5">
            <div className="table-responsive">
              <table
                id="tableData"
                className={`table table-sm table-striped table-hover table-responsive mt-3 ${
                  mode === day
                    ? "table-primary"
                    : "table-dark border border-light"
                }`}
              >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Photo</th>
            <th scope="col">Nama Pegawai</th>
            <th scope="col">Tanggal_Lahir</th>
            <th scope="col" data-testid="th-gender">
              Gender
            </th>
            <th scope="col" data-testid="th-phone">
              Phone
            </th>
            <th scope="col" data-testid="th-email">
              Email
            </th>
            <th scope="col" data-testid="th-hire">
              Hire Date
            </th>
            <th scope="col" data-testid="th-position">
              Position
            </th>
            <th scope="col" data-testid="th-action" visib>
              Action
            </th>
          </tr>
        </thead>
                <tbody>
                  {products.map((product, index) => (
                    <>
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.id}</td>
                        <td>
                          <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: "75px" }}
                          ></img>
                        </td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>Rp. {numFormat(product.price)}</td>
                        <td>{numFormat(product.stock)}</td>
                        <td>{product.create_by}</td>
                        <td>{product.last_update}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
