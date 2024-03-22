import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import Mainlayout from "./components/Mainlayout/Mainlayout";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";

import BlogDetails from "./components/BlogDetails/BlogDetails";
import Content from "./components/Content/Content";
import Author from "./components/Author/Author";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.blogId}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.blogId}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.blogId}`),
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <BookMarks></BookMarks>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>
);
