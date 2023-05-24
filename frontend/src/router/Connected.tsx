import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "../components/Header.tsx";
import Main from "../pages/main.tsx";
import Classroom from "../pages/classroom.tsx";

const router = createBrowserRouter([
    {
        path: "classroom/:id",
        element: <Classroom/>,
    },
    {
        path: "/*",
        element: <Main/>,
    },
]);

export default function Connected() {
    console.log("hello")
    return (
        <>
            <Header/>
            <RouterProvider router={router}/>
        </>
    );
}
