/** @format */

import React from "react";

const ToyCard = ({ toy }) => {
  const {
    sellerName,
    sellerEmail,
    toyImage,
    price,
    quantity,
    rating,
    details,
    toyName,
    subCategory,
  } = toy;
  return (
    <>
      <div className="card card-compact glass w-full bg-[#cc06d63e] hover:bg-[#cc06d651] motion">
        <figure className="h-2/5">
          <img src={toyImage} alt="Toy" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <div>
            <p>Price : {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyCard;
