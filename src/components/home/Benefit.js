import React from "react";
import CardBenefit from "./CardBenefit";

export default function Benefit() {
  const cardData = [
    {
      name: "location-img",
      imageSource: "/images/store-2.jpg",
      text: "Lokasi Mudah Diakses",
    },
    {
      name: "product-img",
      imageSource: "/images/product-1.jpg",
      text: "Varian Produk Beragam",
    },
    {
      name: "discount-img",
      imageSource: "/images/discount.jpg",
      text: "Promo dan Diskon Menarik",
    },
  ];
  return (
    <>
      <section className="mt-5">
        <div className="row mx-5 my-2">
          {cardData.map((data, index) => (
            <div className="col-sm mb-3" key={index}>
              <CardBenefit
                imgSrc={data.imageSource}
                imgName={data.name}
                cardText={data.text}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
