import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { options } from "./data";
import CategoryPage from "./pages/CategoryPage";
import Confirm from "./pages/Confirm";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";
import "./scss/main.scss";

const optionsAsRoutes = options.map((option, i) => ({
  path: `/${option.category.toLowerCase()}`,
  element: (
    <CategoryPage
      optionIndex={i}
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
    element: <Confirm />,
    errorElement: <NotFound />,
  },
  {
    path: "/result",
    element: <Result />,
    errorElement: <NotFound />,
  },
  ...optionsAsRoutes,
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
