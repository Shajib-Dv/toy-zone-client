/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
]);

export default router;
