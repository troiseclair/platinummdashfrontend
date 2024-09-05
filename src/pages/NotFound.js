import React from "react";

export default function NotFound() {
  const pathLocation = window.location.pathname;

  return (
    <>
      <main id="error" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="card border border-warning border-5 text-center">
            <div className="card-body bg-info bg-opacity-10 p-5">
              <img
                src="/images/logo-1.png"
                className="card-img-top mb-3"
                alt="logo-img"
              />
              <h1 className="display-1 fw-bold mb-4" data-testid="test-h1">
                404
              </h1>
              <h2 className="mb-3 font-monospace">Endpoint Tidak Ditemukan</h2>
              <h3 data-testid="get-params">{pathLocation}</h3>
              <a href="/" className="btn btn-warning fw-semibold">
                Kembali
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
