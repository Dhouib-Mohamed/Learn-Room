import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Preview from "../pages/preview";
import Main from "../pages/main";
import NotFound from "../pages/NotFound";
import Connected from "./Connected";
import Disconnected from "./Disconnected";
import Classroom from "../pages/classroom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const App = () => {
    return (
        <Router>
            <Switch>
                <Connected path={"/home"} Component={Main}/>
                <Connected path={"/classroom/:id"} Component={Classroom}/>
                <Disconnected path={"/preview"} Component={Preview}/>
                <Disconnected path={"/signin"} Component={SignIn}/>
                <Disconnected path={"/signup"} Component={SignUp}/>
                <Route path="/*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
