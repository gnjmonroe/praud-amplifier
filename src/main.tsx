import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import { options } from "./data";
import { CategoryPage, Confirm, Home, NotFound, Result } from "./pages";
import "./scss/main.scss";
import { checkLocalStorage } from "./utils";

const optionsAsRoutes: RouteObject[] = options.map((option, i) => ({
  path: `/${option.category.toLowerCase()}`,
  element: (
    <CategoryPage
      optionIndex={i}
      prevSlug={options[i - 1]?.category.toLowerCase() || ""}
      nextSlug={options[i + 1]?.category.toLowerCase() || "confirm"}
    />
  ),
  loader: async () => {
    if (
      !checkLocalStorage(options.slice(0, i).map((o) => o.category)) &&
      option.category !== options[0].category
    )
      return redirect("/");
    return null;
  },
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
    loader: async () => {
      if (!checkLocalStorage(options.map((option) => option.category)))
        return redirect("/");
      return null;
    },
    errorElement: <NotFound />,
  },
  {
    path: "/result",
    element: <Result />,
    loader: async () => {
      if (!checkLocalStorage(options.map((option) => option.category)))
        return redirect("/");
      return null;
    },
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
