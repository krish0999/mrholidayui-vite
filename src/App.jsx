import React from 'react'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';

const Layout = ()=>{
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>  ,
      },
      {
        path: "/contact",
        element: <Contact/>  ,
      },
      {
        path: "/service",
        element: <Service/>  ,
      },
      {
        path: "/about",
        element: <About/>  ,
      },
    ],
  },
]);
const App = () => {
  return (
    <div>
       <RouterProvider router={router} />
       
    </div>
  )
}

export default App
