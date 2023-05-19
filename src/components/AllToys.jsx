/** @format */

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toys-zone-server-five.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="overflow-x-auto w-full my-10">
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
