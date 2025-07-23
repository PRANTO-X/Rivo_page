import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import { Home } from './components/home/Home.jsx';
import Shop from './components/shop/Shop.jsx';
import Feature from './components/feature/Feature.jsx';
import Contact from './components/contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'feature', element: <Feature /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

