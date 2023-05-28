import {useContext} from "react";
import {UserContext} from "../context/user";
import {Route} from 'react-router-dom';
import NotFound from "../pages/NotFound";
import Header from "../components/Header";


export default function Connected({path, Component}) {
    const {getUserId} = useContext(UserContext)
    return (
        <Route path={path} exact>
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
