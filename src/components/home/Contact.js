import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="row mx-5 my-5">
          <h2 className="text-center fw-semibold mb-5">Contact us</h2>
          <div className="col-sm-6 p-0 mb-5">
            {/* Google Maps : Store Location */}
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.34724468083!2d106.84331197364385!3d-6.175128257700418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1720344683020!5m2!1sen!2sid"
              width="100%"
              height="90%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
            <p className="fw-light fst-italic">
              Merdeka Square, Jakarta, Jalan Lapangan Monas, Gambir, Central
              Jakarta City, Jakarta 10110
            </p>
          </div>
          <div className="col-sm-6">
            <form className="px-5">
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control shadow-sm"
                  id="exampleFormControlInput1"
                  data-testid="email"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  No Telepon
                </label>
                <input
                  type="number"
                  className="form-control shadow-sm"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control shadow-sm"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-warning shadow-sm fw-bold text-body-secondary"
                  type="button"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
