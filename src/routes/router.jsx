/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../layout/Main";
import PageNotFound from "../components/PageNotFound";
import AllToys from "../components/AllToys";
import MyToys from "../components/MyToys";
import AddToys from "../components/AddToys";
import Blog from "../components/Blog";
import ToyDetails from "../components/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/toys/:id",
        element: <ToyDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/toy/${params.id}`),
      },
      {
        path: "/mytoys",
        element: <MyToys />,
      },
      {
        path: "/addtoys",
        element: <AddToys />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
