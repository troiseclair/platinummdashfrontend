import React from "react";

export default function Accordion({ mode, day }) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div
        className={`accordion-item  ${
          mode === day ? "" : "bg-dark text-light"
        }`}
      >
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed ${
              mode === day ? "" : "bg-secondary text-light"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Endpoint Employee
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className="row">
              {/* <!-- Melihat Semua Data Karyawan --> */}
              <div className="col-md-4">
                <span className="badge rounded-pill text-bg-success">GET</span>
                <p className="fw-6">
                  Menampilkan Semua Data Karyawan dari tb_employee dan
                  menampilkan response halaman employee.ejs
                </p>
              </div>
              <div className="col-md-4">
                <h6>Request</h6>
                <p>http://localhost:3108/user</p>
              </div>
              <div className="col-md-4">
                <h6>Response</h6>
                <pre>
                  &#91;
                  <br />
                  &#10100;
                  <br />
                  emp_id: 'emp_0001',
                  <br />
                  name: 'Sabrina Mawar',
                  <br />
                  birth_date: '2000-03-21',
                  <br />
                  gender: 'Perempuan',
                  <br />
                  phone: '082112341234',
                  <br />
                  email: 'sabrina123@gmail.com',
                  <br />
                  hire_date: '2024-04-12',
                  <br />
                  position: 'Direktur'
                  <br />
                  &#125;,
                  <br />
                  &#10100;
                  <br />
                  emp_id: 'emp_0002',
                  <br />
                  name: 'Mas Gun',
                  <br />
                  birth_date: '1990-07-15',
                  <br />
                  gender: 'laki-laki',
                  <br />
                  phone: '082109876543'
                  <br />, email: 'masgun321@gmail.com',
                  <br />
                  hire_date: '2024-05-17',
                  <br />
                  position: 'Kepala Bagian'
                  <br />
                  &#125;,
                  <br />
                  &#10100;
                  <br />
                  emp_id: 'emp_0003',
                  <br />
                  name: 'John Doe',
                  <br />
                  birth_date: '1995-05-25',
                  <br />
                  gender: 'laki-laki',
                  <br />
                  phone: '082154326789',
                  <br />
                  email: 'johndoe098@gmail.com',
                  <br />
                  hire_date: '2024-05-27',
                  <br />
                  position: 'Staf'
                  <br />
                  &#125;
                  <br />
                  &#93;
                  <br />
                </pre>
              </div>
              {/* <!-- Melihat Data Karyawan Berdasarkan ID --> */}
              <div className="col-md-4">
                <span className="badge rounded-pill text-bg-success">GET</span>
                <p>
                  Menampilkan Data Karyawan Berdasarkan ID yang diinput, dan
                  menampilkan response JSON
                </p>
              </div>
              <div className="col-md-4">
                <br />
                <p>http://localhost:3108/user/emp_0001</p>
              </div>
              <div className="col-md-4">
                <pre>
                  &#10100;
                  <br />
                  "emp_id": "emp_0001",
                  <br />
                  "name": "Sabrina Mawar",
                  <br />
                  "birth_date": "2000-03-21",
                  <br />
                  "gender": "Perempuan",
                  <br />
                  "phone": "082112341234",
                  <br />
                  "email": "sabrina123@gmail.com",
                  <br />
                  "hire_date": "2024-04-12",
                  <br />
                  "position": "Kasir"
                  <br />
                  &#125;
                  <br />
                </pre>
              </div>
              {/* <!-- Melihat Data Karyawan Berdasarkan ID --> */}
              <div className="col-md-4">
                <span className="badge rounded-pill text-bg-warning">POST</span>
                <p>Input Data Karyawan</p>
              </div>
              <div className="col-md-4">
                <br />
                <p>http://localhost:3108/user</p>
                <pre>
                  &#10100;
                  <br />
                  "name": "Mr. Crab",
                  <br />
                  "birthDate": "1960-01-01",
                  <br />
                  "gender": "Laki-laki",
                  <br />
                  "phone": "08214355353",
                  <br />
                  "email": "holycrab@mail.com",
                  <br />
                  "hireDate": "1990-12-03",
                  <br />
                  "position": "CEO"
                  <br />
                  &#125;
                  <br />
                </pre>
              </div>
              <div className="col-md-4">
                <pre>
                  &#10100;
                  <br />
                  "emp_id": "emp_0004"
                  <br />
                  "name": "Mr. Crab",
                  <br />
                  "birthDate": "1960-01-01",
                  <br />
                  "gender": "Laki-laki",
                  <br />
                  "phone": "08214355353",
                  <br />
                  "email": "holycrab@mail.com",
                  <br />
                  "hireDate": "1990-12-03",
                  <br />
                  "position": "CEO"
                  <br />
                  &#125;
                  <br />
                </pre>
              </div>
              {/* <!-- Update Data Karyawan Berdasarkan ID --> */}
              <div className="col-md-4">
                <span className="badge rounded-pill text-bg-info">PUT</span>
                <p>Update Data Karyawan Berdasarkan ID</p>
              </div>
              <div className="col-md-4">
                <br />
                <p>http://localhost:3108/user/emp_0004</p>
                <pre>
                  &#10100;
                  <br />
                  "name": "Mr. Crab",
                  <br />
                  "birthDate": "1960-01-01",
                  <br />
                  "gender": "Laki-laki",
                  <br />
                  "phone": "082109876543",
                  <br />
                  "email": "holycrab123@mail.com",
                  <br />
                  "hireDate": "1990-12-03",
                  <br />
                  "position": "Admin"
                  <br />
                  &#125;
                  <br />
                </pre>
              </div>
              <div className="col-md-4">
                <pre>
                  &#10100;
                  <br />
                  "emp_id": "emp_0004"
                  <br />
                  "name": "Mr. Crab",
                  <br />
                  "birthDate": "1960-01-01",
                  <br />
                  "gender": "Laki-laki",
                  <br />
                  "phone": "082109876543", "email": "holycrab123@mail.com",
                  <br />
                  "hireDate": "1990-12-03",
                  <br />
                  "position": "Admin"
                  <br />
                  &#125;
                  <br />
                </pre>
              </div>
              {/* <!-- Hapus Data Karyawan Berdasarkan ID --> */}
              <div className="col-md-4">
                <span className="badge rounded-pill text-bg-danger">
                  DELETE
                </span>
                <p>Hapus Data Karyawan Berdasarkan ID</p>
              </div>
              <div className="col-md-4">
                <br />
                <p>http://localhost:3108/user/emp_0004</p>
              </div>
              <div className="col-md-4">
                <pre></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`accordion-item  ${
          mode === day ? "" : "bg-dark text-light"
        }`}
      >
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed ${
              mode === day ? "" : "bg-secondary text-light"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Endpoint User
          </button>
        </h2>
      </div>
    </div>
  );
}
