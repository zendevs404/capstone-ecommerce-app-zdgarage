import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home/Home';
import Produk from './produk/produk';
import SingleProduk from './produk/SingleProduk.jsx';
import CartPage from './produk/CartPage.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produk",
        element: <Produk />,
      },
      {
        path: "/produk/:id",
        element: <SingleProduk />,
      },
      {
        path: "/cart-page",
        element: <PrivateRoute><CartPage /></PrivateRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  // Demo
  // {
  //   path: "/login",
  //   element: <LoginD />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </AuthProvider>
);

