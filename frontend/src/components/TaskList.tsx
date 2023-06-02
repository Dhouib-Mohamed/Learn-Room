import {Flex} from "@chakra-ui/react";
import Task from "../components/Task";
import {useEffect, useState} from "react";
import {get} from "../helpers/helpers";
// import {useHistory} from 'react-router-dom';
import EmptyStatePlaceholder from "./EmptyStatePlaceholder";
import { getItem } from "../../utils/localStorage";


const TaskList = ({url, path,task}) => {
    // const history = useHistory();

    const [tasks, setTasks] = useState([])
    const getTasks = async () => {
        const result = await get(url)
        console.log("task lisk", result)
        if (result) {
            setTasks(result)
        }
    }

    useEffect(() => {
        getTasks()
    }, [])


   

    return (
        <>
            {tasks.length > 0 ?
                <Flex direction={"column"} width={"100%"}>
                    {tasks?.map((task) => {
                        console.log(task);
                        return (
                            <Task
                                key={task.id}
                                path={`${path}${task.id}`}
                                task={task}
                            />
                        )
                    })}
                </Flex>
                : <EmptyStatePlaceholder user={getItem("user").user?"teacher":"student"} type={task?"task":"assignment"}/>}

        </>
    );
};


export default TaskList;