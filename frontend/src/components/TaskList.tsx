import {Button, Flex} from "@chakra-ui/react";
import Task from "../components/Task";

const TaskList = ({classroom}) => {
    return (
        <>
        <Flex direction={"column"}>
            {classroom?.tasks?.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                />
            ))}
        </Flex>
        <br />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md"
                height="30px"
                width="100px" onClick={() => {
                }}
            >Add a Task</Button>
            <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md" 
                height="30px"
                width="170px" onClick={() => {
                }}
            >Add an Assignment</Button>
        </div>
        </div>
        </>
    );
};


export default TaskList;