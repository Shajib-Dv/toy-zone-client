/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { HiShoppingCart } from "react-icons/hi";

const Banner = () => {
  const bannerImg = [
    "https://i.ibb.co/c2GGv7V/pngwing-com-1.png",
    "https://i.ibb.co/PYQJh5t/pngwing-com-2.png",
    "https://i.ibb.co/R37pVRJ/pngwing-com.png",
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImg.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-[calc(100vh-100px)] w-full flex bg-[rgba(223,37,236,0.17)] ">
              <img src={img} alt="banner" className=" h-full w-1/2 bg-cover" />
              <div className=" w-full h-full flex justify-center items-cent text-white text-center">
                <div className="p-10 text-black space-y-16">
                  <h2 className="text-5xl font-bold bg-purple-300 p-4 rounded-md">
                    Welcome to Toys-Zone
                  </h2>
                  <p className="font-semibold space-y-6">
                    We provide our best service for your kid. Buy your toys and
                    your discount here.
                  </p>
                  <button className="primary-btn gap-4">
                    Shop now <HiShoppingCart className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
