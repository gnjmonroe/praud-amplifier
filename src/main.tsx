import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import dataset from './ts/data';

import Home from './pages/Home';
import Result from './pages/Result';
import Confirm from './pages/Confirm';
import CategoryPage from './pages/CategoryPage';
import NotFound from './pages/NotFound';

import './scss/main.scss';

// makes a route for each category
const dataAsRoutes = dataset.map((set, i: number) => ({
  path: `/${set.category.toLowerCase()}`,
  element: <CategoryPage
    data={dataset}
    dataIndex={i}
    prevSlug={dataset[(i - 1)]?.category.toLowerCase() || ''}
    nextSlug={dataset[(i + 1)]?.category.toLowerCase() || 'confirm'}
  />,
  errorElement: <NotFound />,
}));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home
      destination={dataset[0].category}
    />,
    errorElement: <NotFound />,
  },
  {
    path: '/confirm',
    element: <Confirm data={dataset} />,
    errorElement: <NotFound />,
  },
  {
    path: '/result',
    element: <Result />,
    errorElement: <NotFound />,
  },
  ...dataAsRoutes,
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
