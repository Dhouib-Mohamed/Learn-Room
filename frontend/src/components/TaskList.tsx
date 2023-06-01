import {Flex, useDisclosure} from "@chakra-ui/react";
import Task from "../components/Task";
import { useState, useEffect } from "react";
import { get, post } from "../helpers/helpers";
import {useHistory} from 'react-router-dom';


const TaskList = ({id}) => {
    
    const [update, setUpdate] = useState(true)

    // const history = useHistory();

    const [tasks,setTasks] = useState([])
    const getTasks = async () => {
        console.log("id task ",id)
        const result = await get("classroom/task/" + id)
        console.log("task lisk",result)
        setTasks(result)

    }

    useEffect(() => {
        getTasks()
    }, [update])


   

    return (
        <>
        <Flex direction={"column"}>
            {/* {tasks?.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                />
            ))} */}
        </Flex>
        
        </>
    );
};


export default TaskList;