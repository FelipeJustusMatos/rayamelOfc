import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Ourservices from './Pages/Ourservices.jsx';
import Privacy from './Pages/Privacy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '#/Privacy',
    element: <Privacy />,
  },
  {
    path: '#/Ourservices',
    element: <Ourservices />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
