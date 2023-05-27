import {createContext} from "react";

export const UserContext = createContext({getUserId: null, setUserId: null, disconnect: null});

function UserProvider(props) {
    const getUserId = () => {
        return localStorage.getItem("user")
    }
    const setUserId = (user) => {
        localStorage.setItem("user", "" + user)
    }
    const disconnect = () => {
        localStorage.removeItem("user")
    }
    return (
        <UserContext.Provider value={{getUserId, setUserId, disconnect}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;
