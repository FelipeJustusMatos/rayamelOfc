import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Ourservices from './Pages/Ourservices.jsx';
import Privacy from './Pages/Privacy';
import Booking from './Pages/Booking';
import Aboutus from './Pages/Aboutus';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Privacy',
    element: <Privacy />,
  },
  {
    path: '/Ourservices',
    element: <Ourservices />,
  },
  {
    path: '/Booking',
    element: <Booking />,
  },
  {
    path: '/Aboutus',
    element: <Aboutus />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
