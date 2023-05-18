/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default router;
