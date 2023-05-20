/** @format */

import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaShoppingBag,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ToyCard = ({ toy }) => {
  const {
    _id,
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

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 200,
      duration: 100,
      easing: "ease-in-out",
      delay: 100,
      anchorPlacement: "center-bottom",
      mirror: true,
      startEvent: "load",
      disable: false,
    });
  }, []);

  return (
    <>
      <div
        className="card w-96 mx-auto my-10 shadow-2xl shadow-purple-600"
        data-aos="zoom-in-left"
        data-aos-duration="1000"
      >
        <figure className="h-64">
          <img src={toyImage} />
        </figure>
        <div className="card-body text-center">
          <div className="indicator mx-auto">
            <span className="indicator-item -top-1 -right-5 badge badge-secondary">
              {subCategory}
            </span>
            <p className="text-3xl text-purple-700 tracking-wider font-bold">
              {toyName}
            </p>
          </div>
          <p className="text-xl font-semibold text-gray-700">{details}</p>
          <p className="text-2xl text-purple-600 font-bold">${price}</p>
          <p className="text-xl flex justify-center items-center gap-2 text-purple-600 font-bold">
            <FaShoppingBag />
            {quantity}/ Available
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            <span className="text-xl font-bold">{rating}</span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            {rating > 4 ? <FaStar /> : <FaStarHalfAlt />}
          </div>
        </div>
        <Link to={`/toys/${_id}`}>
          <button className="primary-btn w-full gap-2">
            view details <FaArrowRight className="text-xl" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default ToyCard;
