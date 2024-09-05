import React from "react";

export default function CardBenefit({ imgSrc, imgName, cardText }) {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={imgName} />
      <div className="card-body">
        <h5 className="card-title text-center">{cardText}</h5>
      </div>
    </div>
  );
}
