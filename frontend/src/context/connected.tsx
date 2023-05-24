import {createContext, useState} from "react";

export const ConnectedContext = createContext({isConnected: null, setIsConnected: null});

function ConnectedProvider(props) {
    const [isConnected, setIsConnected] = useState(false);
    return (
        <ConnectedContext.Provider value={{isConnected, setIsConnected}}>
            {props.children}
        </ConnectedContext.Provider>
    );
}

export default ConnectedProvider;
