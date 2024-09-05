import React from "react";

export default function FooterLink({ link, iconClass, linkText }) {
  return (
    <div>
      <a href={link} className="text-decoration-none text-body-secondary">
        <i className={iconClass}></i>
        <span className="ms-2">{linkText}</span>
      </a>
    </div>
  );
}
