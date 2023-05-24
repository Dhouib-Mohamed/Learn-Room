import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import MainRouter from "./router";
import ConnectedProvider from "./context/connected.tsx";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ChakraProvider>
        <ConnectedProvider>
            <MainRouter/>
        </ConnectedProvider>
    </ChakraProvider>,
);
