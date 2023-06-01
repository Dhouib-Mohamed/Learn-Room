import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Preview from "../pages/preview";
import Main from "../pages/main";
import NotFound from "../pages/NotFound";
import Connected from "./Connected";
import Disconnected from "./Disconnected";
import Classroom from "../pages/classroom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CourseDetails from "../pages/CourseDetails";
import TaskDetails from "../pages/TaskDetails";
import AssignmentDetails from "../pages/AssignmentDetails";
import {getItem} from "../../utils/localStorage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to={getItem("user") ? "/home" : "preview"}/>
                <Connected path={"/home"} Component={Main}/>
                <Connected path={"/classroom/*/course/:id"} Component={CourseDetails}/>
                <Connected path={"/classroom/*/task/:id"} Component={TaskDetails}/>
                <Connected path={"/classroom/*/assignment/:id"} Component={AssignmentDetails}/>
                <Connected path={"/classroom/:id/"} Component={Classroom}/>
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
