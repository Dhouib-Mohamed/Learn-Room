import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Preview from "../pages/preview.tsx";
import Main from "../pages/main.tsx";
import NotFound from "../pages/NotFound.tsx";
import Connected from "./Connected.tsx";
import Disconnected from "./Disconnected.tsx";
import Classroom from "../pages/classroom.tsx";
import SignIn from "../pages/SignIn.tsx";
import SignUp from "../pages/SignUp.tsx";
import Task from '../pages/task.tsx';
import Assignment from '../pages/assignment.tsx';

const App = () => {
    return (
        <Router>
            <Switch>
                <Connected path={"/home"} Component={Main}/>
                <Connected path={"/classroom/:id"} Component={Classroom}/>
                <Disconnected path={"/preview"} Component={Preview}/>
                <Disconnected path={"/signin"} Component={SignIn}/>
                <Disconnected path={"/task"} Component={Task}/>
                <Disconnected path={"/assign"} Component={Assignment}/>
                <Disconnected path={"/signup"} Component={SignUp}/>
                <Route path="/*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
