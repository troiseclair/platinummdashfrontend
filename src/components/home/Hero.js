import React from "react";

export default function Hero() {
  return (
    <>
      <section className="bg-yellow container-fluid pb-3">
        <div className="row py-5">
          <div className="col-sm d-flex align-items-center">
            <div className="mx-5" data-testid="header-content">
              <h1 className="fs-1 text-md-start text-center">Petite Mart</h1>
              <p className="lead text-md-start text-center text-body-secondary">
                Rasakan Kenyamanan Berbelanja Dan Pilihan Yang Lengkap, Dengan
                Harga Terjangkau Hanya Di Petite Mart!!!
              </p>
            </div>
          </div>
          <div className="col-sm d-flex align-items-center">
            <div className="mx-5">
              <img
                src="/images/hero2-img.png"
                className="img-fluid"
                alt="grocery-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
