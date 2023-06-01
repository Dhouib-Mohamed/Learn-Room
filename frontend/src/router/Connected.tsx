import {Route} from 'react-router-dom';
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import {getItem} from "../../utils/localStorage";
import PreviewHeader from "../components/PreviewHeader";


export default function Connected({path, Component}) {
    return (
        <Route path={path} exact>
            {getItem("user") ?
                <>
                    <Header/>
                    <Component/>
                </> :
                <>
                    <PreviewHeader/>
                    <NotFound/>
                </>
            }
        </Route>
    );
}
