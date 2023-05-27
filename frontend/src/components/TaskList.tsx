import {Flex} from "@chakra-ui/react";
import Task from "../components/Task";

const TaskList = ({classroom}) => {
    return (
        <Flex direction={"column"}>
            {classroom.tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                />
            ))}
        </Flex>
    );
};


export default TaskList;