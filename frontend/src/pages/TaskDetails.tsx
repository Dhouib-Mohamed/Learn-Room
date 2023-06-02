import Footer from '../components/Footer';
import Header from '../components/Header';

import TaskButton from '../components/TaskButton';
import {
    Divider,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalContent,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import { useHistory, useParams } from 'react-router-dom';
import { getItem } from "../../utils/localStorage";
import { AiOutlineMore } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { get, patch, remove } from "../helpers/helpers";
import TaskModal from "../modals/task";
import { ErrorContext } from '../context/error';

function TaskDetails() {
    let { id } = useParams();
    const {setErrorModal}=useContext(ErrorContext);
    console.log(id)
    const [update, setUpdate] = useState(false)
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [task, setTask] = useState({name: "", content: "", deadline: "", teacher: {}})
    const history = useHistory();
    const getCourse = async () => {
        const result = await get("task/" + id,setErrorModal)
        setTask(result)
    }
    useEffect(() => {
        getCourse()
    }, [update])
    const deleteTask = async () => {
        await remove("task/" + id,setErrorModal)
        history.goBack();
    }

    const editTask = async (data) => {
        const result = await patch("task/" + id, data,setErrorModal)
        console.log("res:", result)
        onClose();
        setUpdate(!update)
    }

    const handleSubmit = (values) => {

        editTask(values)

    };
    return (
        <>
            <Flex style={{ minHeight: "89vh", }}>
                <Header />
                <Flex style={{
                    flexDirection: "column", width: "100%", margin: "30px 100px"
                }}>

                    <Flex flexDirection={"row"}>
                        <div style={{ width: "99%" }}>
                            <h3 style={{fontWeight: '600', fontSize: "24px"}}>{task.name}</h3>
                            <p style={{fontSize: '15px', fontWeight: 'lighter'}}>
                                {task.teacher.name}
                            </p>
                        </div>
                        <div style={{ height: '10px' }}></div>
                        {getItem("user").user ? <Menu flip={true} direction={"rtl"} >
                            <MenuButton
                                fontSize={"25px"}
                                style={{ marginTop: 2 }}
                                as={IconButton}
                                aria-label='Options'
                                icon={<AiOutlineMore />}
                                variant='outline'
                            />
                            <MenuList style={{ fontSize: "15px" }}>
                                <MenuItem onClick={() => {
                                    onOpen()
                                }}>Edit Task</MenuItem>
                                <MenuItem onClick={deleteTask}>Delete Task</MenuItem>
                            </MenuList>
                        </Menu> : null}
                    </Flex>
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                    <div style={{ width: "100%" }}>

                        <pre style={{ whiteSpace: "pre-wrap" }}>{task.content}</pre>

                    </div>
                    <br />
                    {getItem("user").user ? null :
                        <>
                            <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                                <TaskButton />
                            </div></>
                    }
                </Flex>
            </Flex>
            <Footer />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <TaskModal onClose={onClose} handleSubmit={handleSubmit} values={task} />
                </ModalContent>
            </Modal>
        </>
    );
}

export default TaskDetails;
