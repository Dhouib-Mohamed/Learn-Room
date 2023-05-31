import Footer from '../components/Footer';
import Header from '../components/Header';

import TaskButton from '../components/TaskButton';
import {  Divider } from "@chakra-ui/react";
import {classrooms} from "../data/classrooms.js";
import {useParams} from "react-router-dom";

function TaskDetails() {
    let {id} = useParams();
    console.log(id)
    const task=classrooms[0].tasks[0];
    return (
        <>
        <div style={{minHeight: "89vh",}}>
            <Header/>
            <br />
            <br />
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: "center"
            }}>
                <div style={{ width: "1000px", }}>
                    <h3 style={{ fontWeight: '600', fontSize: "24px" }}>{task.title}</h3>
                    <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                        {task.teacher}  &#9679; {task.date}
                    </p>
                    <div style={{ height: '10px' }}></div>
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                    <div style={{ width: "1000px", display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <div style={{ width: "900px" }}>
                            <pre >{task.description}</pre>
                        </div>
                    </div>
                    <br />
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center"}}>
                    <TaskButton/>

                    </div>
                    

                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default TaskDetails;
