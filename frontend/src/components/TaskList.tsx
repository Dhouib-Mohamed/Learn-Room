import {Flex} from "@chakra-ui/react";
import Task from "../components/Task";


const TaskList = ({taskAssignList}) => {
    

    return (
        <>
        <Flex direction={"column"}>
            {taskAssignList?.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                />
            ))}
        </Flex>
        
        </>
    );
};


export default TaskList;