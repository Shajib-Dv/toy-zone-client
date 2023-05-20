/** @format */

import React, { useContext, useEffect, useState } from "react";
import ToyTable from "./ToyTable";
import { AuthContest } from "../AuthProvider/AuthProvider";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const { user } = useContext(AuthContest);

  useEffect(() => {
    fetch(`https://toys-zone-server-five.vercel.app/toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, [isDelete]);

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
