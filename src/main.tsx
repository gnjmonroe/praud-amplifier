import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Confirm from "./pages/Confirm";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";
import "./scss/main.scss";
import data from "./ts/data";

interface Dataset {
  category: string;
  options: string[];
}

// makes a route for each category
const dataAsRoutes = data.map((set: Dataset, i: number) => ({
  path: `/${set.category.toLowerCase()}`,
  element: (
    <CategoryPage
      data={data}
      dataIndex={i}
      prevSlug={data[i - 1]?.category.toLowerCase() || ""}
      nextSlug={data[i + 1]?.category.toLowerCase() || "confirm"}
    />
  ),
  errorElement: <NotFound />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home destination={data[0].category} />,
    errorElement: <NotFound />,
  },
  {
    path: "/confirm",
    element: <Confirm data={data} />,
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
