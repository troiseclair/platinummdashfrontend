import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TableUser({ userLogin, mode, day }) {
  const [User, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    // console.log("user.accessToken", userLogin.user.accessToken);
    try {
      await axios
        .get("http://52.221.24.81:3108/User", {
          headers: {
            Authorization: userLogin.user.accessToken,
          },
        })
        .then((res) => {
          setUser(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="table-responsive">
      <table
        id="tableData"
        className={`table table-sm table-striped table-hover table-responsive mt-3 ${
          mode === day ? "table-primary" : "table-dark border border-light"
        }`}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Photo</th>
            <th scope="col">Nama</th>
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
          {User.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>
                <img
                  src={data.image}
                  alt={data.id}
                  style={{ width: "75px" }}
                ></img>
              </td>
              <td>{data.name}</td>
              <td>{data.birth_date}</td>
              <td>{data.gender}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.hire_date}</td>
              <td>{data.position}</td>
              <td>
                {/* edit data User */}
                <Link
                  to={`update/${data.id}`}
                  className="btn btn-sm btn-success m-1"
                >
                  <i className="fas fa-edit"></i>
                </Link>
                {/* Hapus Data User */}
                <Link
                  to={`delete/${data.id}`}
                  className="btn btn-sm btn-danger m-1"
                >
                  <i className="fas fa-trash"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
