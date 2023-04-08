import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Lodgements from './pages/Lodgements/Lodgements';
import Error from './pages/Error/Error';



const router = createBrowserRouter([
    {
      path: "/Home",
      element: <Home />
    },
    {
        path: "/about",
        element: <About />
      },
      {
        path: "/lodgements",
        element: <Lodgements />
      },
      {
        path: "/error",
        element: <Error />
      },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

