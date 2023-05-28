import {useContext} from "react";
import {UserContext} from "../context/user";
import {Route} from 'react-router-dom';
import NotFound from "../pages/NotFound";

export default function Disconnected({path, Component}) {
    const {getUserId} = useContext(UserContext)
    return (
        <Route path={path}>
            {!(getUserId()) ?
                <Component/> :
                <NotFound/>
            }
        </Route>
    );
}
