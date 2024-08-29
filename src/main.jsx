import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root.jsx';
import Home from './Components/Home.jsx';
import AllArtItems from './Components/AllArtItems.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import NotFount from './Error/NotFount.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Updated from './Components/Updated.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFount></NotFount>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/craftItems',
        element: <AllArtItems></AllArtItems>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update',
        element: <Updated></Updated>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
