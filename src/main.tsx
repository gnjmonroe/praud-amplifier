import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Confirm from './pages/Confirm';
import CategoryPage from './pages/CategoryPage';
import NotFound from './pages/NotFound';
import './scss/main.scss';

const data = [
  {
    category: 'Model',
    options: [
      'Pool',
      'Cinema',
      'Kitchen',
      'Library',
      'Garden',
    ],
  },
  {
    category: 'Location',
    options: [
      'Mountain',
      'River',
      'Sea',
      'Rural',
      'Valley',
    ],
  },
  {
    category: 'User',
    options: [
      'Single',
      'Couple',
      'Family',
      'Pet',
    ],
  },
  {
    category: 'Mood',
    options: [
      'Active',
      'Silent',
    ],
  },
  {
    category: 'Fenestration',
    options: [
      'Close',
      'Highlight',
      'Skylight',
      'Semi-Open',
    ],
  },
];

const dataAsRoutes = data.map((set: any, i: number) => ({
  path: `/${set.category.toLowerCase()}`,
  element: <CategoryPage data={set} prevSlug={data[(i - 1)]?.category.toLowerCase() || '../'} nextSlug={data[(i + 1)]?.category.toLowerCase() || 'confirm'} />,
  errorElement: <NotFound />,
}));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/confirm',
    element: <Confirm data={data} />,
    errorElement: <NotFound />,
  },
  {
    path: '/result',
    element: <Result />,
    errorElement: <NotFound />,
  }, ...dataAsRoutes,
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
