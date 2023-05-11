import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/main";
import Classroom from "./pages/classroom";
import Preview from "./pages/preview.tsx"
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
    {
        path: "/preview",
        element: <Preview />
    },
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
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>,
)
