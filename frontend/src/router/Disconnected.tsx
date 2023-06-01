import {Route} from 'react-router-dom';
import NotFound from "../pages/NotFound";
import {getItem} from "../../utils/localStorage";
import Header from "../components/Header";

export default function Disconnected({path, Component}) {
    return (
        <Route path={path}>
            {!(getItem("user")) ?
                <Component/> :
                <>
                    <Header/>
                    <NotFound/>
                </>
            }
        </Route>
    );
}
