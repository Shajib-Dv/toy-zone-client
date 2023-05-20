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
import UpdateToy from "../components/UpdateToy";
import SignIn from "../components/UserAccount/SignIn";
import SignUp from "../components/UserAccount/SignUp";

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
      },
      {
        path: "/toys/:id",
        element: <ToyDetails />,
        loader: ({ params }) =>
          fetch(
            `https://toys-zone-server-five.vercel.app/toys/toy/${params.id}`
          ),
      },
      {
        path: "/toys/update/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(
            `https://toys-zone-server-five.vercel.app/toys/toy/${params.id}`
          ),
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
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
