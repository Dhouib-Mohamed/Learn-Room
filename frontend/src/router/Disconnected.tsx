import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Preview from "../pages/preview.tsx";
import NotFound from "../pages/NotFound.tsx";


export default function Disconnected() {
    const router = createBrowserRouter([
        {
            path: "/preview",
            element: <Preview/>,
        },
        {
            path: "/*",
            element: <NotFound/>,
        },
    ]);
    return (
        <RouterProvider router={router}/>
    )
}
