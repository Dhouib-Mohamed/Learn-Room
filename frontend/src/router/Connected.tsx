import {useContext} from "react";
import {UserContext} from "../context/user.tsx";
import {Route} from 'react-router-dom';
import NotFound from "../pages/NotFound.tsx";
import Header from "../components/Header.tsx";


export default function Connected({path, Component}) {
    const {getUserId} = useContext(UserContext)
    return (
        <Route path={path}>
            {getUserId() ?
                <>
                    <Header/>
                    <Component/>
                </> :
                <NotFound/>
            }
        </Route>
    );
}
