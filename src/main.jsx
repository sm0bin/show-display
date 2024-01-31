import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import Show from "./pages/Show/Show";
import Shows from "./pages/Home/Shows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/shows",
        element: <Shows />,
        loader: async () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/shows/:id",
        element: <Show />,
        loader: async () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/blog",
        element: <h1>Blog</h1>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);