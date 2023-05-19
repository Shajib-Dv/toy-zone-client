/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <>
      <div className="overflow-x-hidden w-full my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys && toys?.map((toy) => <ToyTable key={toy._id} toy={toy} />)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
