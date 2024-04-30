import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Confirm from "./pages/Confirm";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";
import "./scss/main.scss";
import { options } from "./data";

// makes a route for each category
const dataAsRoutes = options.map((set, i) => ({
  path: `/${set.category.toLowerCase()}`,
  element: (
    <CategoryPage
      data={options}
      dataIndex={i}
      prevSlug={options[i - 1]?.category.toLowerCase() || ""}
      nextSlug={options[i + 1]?.category.toLowerCase() || "confirm"}
    />
  ),
  errorElement: <NotFound />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home destination={options[0].category} />,
    errorElement: <NotFound />,
  },
  {
    path: "/confirm",
    element: <Confirm data={options} />,
    errorElement: <NotFound />,
  },
  {
    path: "/result",
    element: <Result />,
    errorElement: <NotFound />,
  },
  ...dataAsRoutes,
]);

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>,
  );
}
