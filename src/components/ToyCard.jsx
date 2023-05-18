/** @format */

import React from "react";
import { Link } from "react-router-dom";

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
      <div className="card card-normal h-96 w-full bg-[#cc06d617] hover:bg-[#cc06d626] motion">
        <figure className="h-80">
          <img src={toyImage} alt="Toy" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-black">
            {toyName}
          </h2>
          <div className="flex justify-between items-center text-xl font-semibold">
            <p>Price : {price}</p>
            <p>Rating : {rating}</p>
          </div>
          <div>
            <Link to="/">
              <button className="primary-btn mt-4">view details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyCard;
