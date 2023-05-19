/** @format */

import React, { useEffect, useState } from "react";
import ToyTable from "./ToyTable";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/toys/s@j.com`)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, [isDelete]);

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
            {toys &&
              toys?.map((toy) => (
                <ToyTable
                  key={toy._id}
                  toy={toy}
                  editable={true}
                  setIsDelete={setIsDelete}
                  isDelete={isDelete}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
