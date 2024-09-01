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
import AddCraftItem from './Components/AddCraftItem.jsx';
import MyArtList from './Components/MyArtList.jsx';
import PrivateRouter from './router/PrivateRouter.jsx';
import CraftItemSection from './Components/CraftItemSection.jsx';
import ViewDetail from './Components/ViewDetail.jsx';

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
        path: '/profile',
        element: <PrivateRouter><AllArtItems></AllArtItems></PrivateRouter>,
        loader: () => fetch('https://b9-a9-practice.vercel.app/user')
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
        path: '/viewDetails/:id',
        element: <ViewDetail></ViewDetail>,
        loader: ({ params }) => fetch(`https://b9-a9-practice.vercel.app/user/${params.id}`)
      },
      {
        path: '/craftSection',
        element: <CraftItemSection></CraftItemSection>,
        loader: () => fetch('https://b9-a9-practice.vercel.app/user')
      },
      {
        path: '/update/:id',
        element: <Updated></Updated>,
        loader: ({ params }) => fetch(`https://b9-a9-practice.vercel.app/user/${params.id}`)
      },
      {
        path: '/addCraft',
        element: <PrivateRouter><AddCraftItem></AddCraftItem></PrivateRouter>
      },
      {
        path: '/myCraft',
        element: <PrivateRouter><MyArtList></MyArtList></PrivateRouter>,
        loader: () => fetch('https://b9-a9-practice.vercel.app/user')
      }
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
