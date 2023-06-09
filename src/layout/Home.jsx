/** @format */

import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-360px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Home;
