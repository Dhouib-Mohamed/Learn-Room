import {Flex} from "@chakra-ui/react";
import Task from "../components/Task";
import {Button, Modal, ModalContent, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import TaskModal from "../modals/task";
import AssignmentModal from "../modals/assignment";
import {useHistory} from 'react-router-dom';


const TaskList = ({classroom}) => {
    const { isOpen:isOpen1, onOpen:onOpen1, onClose:onClose1 } = useDisclosure();
    const { isOpen:isOpen2, onOpen:onOpen2, onClose:onClose2 } = useDisclosure();

    const history = useHistory();

    const addTask = async (data) => {
        // const result = await post("classroom/" + getItem("user").id, data)
        // console.log(result)
        // onClose();
        // history.push(`/classroom/${result.id}`);
    }
    const addAssignment = async (data) => {
        // const result = await post("classroom/" + getItem("user").id, data)
        // console.log(result)
        // onClose();
        // history.push(`/classroom/${result.id}`);
    }
   
    const handleSubmit1 = (values) => {
        addTask(values)
    };
    const handleSubmit2 = (values) => {
        addAssignment(values)
    };

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
                width="100px" onClick={() => {onOpen1()}}
            >Add a Task</Button>
            <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md" 
                height="30px"
                width="170px" onClick={() => {onOpen2()}}
            >Add an Assignment</Button>
        </div>
        </div>

        <Modal isOpen={isOpen1} onClose={onClose1}>
                <ModalOverlay />
                <ModalContent>
                    <TaskModal onClose={onClose1} handleSubmit={handleSubmit1}/>
                </ModalContent>
        </Modal>

        <Modal isOpen={isOpen2} onClose={onClose2}>
                <ModalOverlay />
                <ModalContent>
                    <AssignmentModal onClose={onClose2} handleSubmit={handleSubmit2}/>
                </ModalContent>
        </Modal>
        </>
    );
};


export default TaskList;