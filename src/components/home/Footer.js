import React from "react";
import FooterLink from "./FooterLink";

export default function Footer() {
  const followUsData = [
    {
      title: "Twitter",
      link: "https://twitter.com/?lang=enlink",
      icon: "fab fa-twitter-square fa-1x",
    },
    {
      title: "Facebook",
      link: "https://web.facebook.com/?_rdc=1&_rdr",
      icon: "fab fa-facebook-square fa-1x",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/",
      icon: "fab fa-instagram-square fa-1x",
    },
  ];

  const contactData = [
    {
      title: "contact@petite.com",
      link: "#email",
      icon: "fas fa-envelope",
    },
    {
      title: "021-983-4321",
      link: "#phone",
      icon: "fas fa-phone-alt",
    },
  ];

  return (
    <>
      <footer className="footer py-3 bg-yellow">
        <div className="container m-5">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img src="/images/logo-1.png" alt="logo" className="logo" />
              <p className="text-body-secondary pe-lg-5">
                Rasakan Kenyamanan Berbelanja Dan Pilihan Yang Lengkap, Dengan
                Harga Terjangkau Hanya Di Petite Mart!!!
              </p>
            </div>
            <div className="col-lg-3 col-md-6 text-decoration-none text-body-secondary">
              <h5>Follow us</h5>
              {followUsData.map((data, index) => (
                <FooterLink
                  link={data.link}
                  iconClass={data.icon}
                  linkText={data.title}
                  key={index}
                />
              ))}
            </div>
            <div className="col-lg-3 col-md-6 text-decoration-none text-body-secondary">
              <h5>Contact</h5>
              {contactData.map((data, index) => (
                <FooterLink
                  link={data.link}
                  iconClass={data.icon}
                  linkText={data.title}
                  key={index}
                />
              ))}
            </div>
          </div>
          <p className="text-center text-body-secondary mt-5">
            &copy; 2024 Petite Mart, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
