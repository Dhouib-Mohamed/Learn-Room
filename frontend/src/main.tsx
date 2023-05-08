import * as React from "react";
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/main";
import Classroom from "./pages/classroom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/classroom",
        element: <Classroom />
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
