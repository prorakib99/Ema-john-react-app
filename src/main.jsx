import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Order from './components/Order/Order.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './ProductsLoader/ProductsLoader.js';
import Checkout from './components/Checkout/Checkout.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Register from './components/Register/Register.jsx';
import Animation from './components/Animation/Animation.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'animation',
        element: <Animation></Animation>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
