import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import MainRouter from "./router";
import UserProvider from "./context/user";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ChakraProvider>
        <UserProvider>
            <MainRouter/>
        </UserProvider>
    </ChakraProvider>,
);
