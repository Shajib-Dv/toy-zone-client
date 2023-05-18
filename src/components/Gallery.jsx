/** @format */

import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
        {toys &&
          toys?.slice(0, 4).map((toy) => (
            <div key={toy._id} className="avatar">
              <div className="w-full mask mask-hexagon">
                <img src={toy.toyImage} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
