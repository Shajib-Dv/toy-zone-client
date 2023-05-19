/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";

const ToyTable = ({ toy, editable = true }) => {
  const {
    _id,
    sellerName,
    sellerEmail,
    toyImage,
    price,
    quantity,
    toyName,
    subCategory,
  } = toy;
  return (
    <>
      <tr>
        <th>{toyName}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toyImage} />
              </div>
            </div>
            <div>
              <div className="font-bold">{sellerName}</div>
              <div className="text-sm opacity-50">{sellerEmail}</div>
            </div>
          </div>
        </td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th>
          {editable ? (
            <div className="flex gap-2">
              <button className="btn-xs btn bg-transparent hover:bg-transparent border-none text-purple-600">
                <FaPen />
              </button>
              <button className="btn-xs btn bg-transparent hover:bg-transparent border-none text-error">
                <FaTrash />
              </button>
            </div>
          ) : (
            <Link to={`/toys/${_id}`}>
              <button className=" primary-btn btn-xs">details</button>
            </Link>
          )}
        </th>
      </tr>
    </>
  );
};

export default ToyTable;
