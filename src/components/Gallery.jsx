/** @format */

import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys/limit/4")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  //   console.log(toys);
  return (
    <div className="my-32">
      <h2 className="text-5xl text-center font-bold text-purple-600">
        Trending on this weak
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 mx-10">
        {toys &&
          toys?.map((toy) => (
            <>
              <div key={toy._id} className="avatar">
                <div className="w-full mask mask-hexagon  motion">
                  <img src={toy.toyImage} />
                  <div class="absolute top-0 overlay-img">
                    <p class="text-black text-5xl font-bold">{toy.toyName}</p>
                    <button className="primary-btn gap-4">
                      Shop Now <HiShoppingCart className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Gallery;