import Footer from '../components/Footer';
import Header from '../components/Header';

import TaskButton from '../components/TaskButton';
import { Divider, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
import { classrooms } from "../data/classrooms.js";
import { useParams } from "react-router-dom";
import { getItem } from "../../utils/localStorage";
import { AiOutlineMore } from "react-icons/ai";

function TaskDetails() {
    let { id } = useParams();
    console.log(id)
    const task = classrooms[0].tasks[0];
    const { isOpen, onOpen, onClose } = useDisclosure();
    const deleteClassroom = async () => {
        // const response=  await remove ("classroom/"+id)
        // setItem("user",response)
        // history.push('/home');
    }

    const editClassroom = async (data) => {
        // const result = await patch("classroom/" + id, data)
        // console.log("res:", result)
        // setItem("user", result)
        // onClose();
        // setUpdate(!update)
    }

    const handleSubmit = (values) => {

        editClassroom(values)

    };
    return (
        <>
            <Flex style={{ minHeight: "89vh", }}>
                <Header />
                <br />
                <br />
                <Flex style={{
                    flexDirection: "column", width: "100%", justifyContent: "center", margin: "40px 100px"
                }}>

                    <Flex flexDirection={"row"}>
                        <div style={{ width: "99%" }}>
                            <h3 style={{ fontWeight: '600', fontSize: "24px" }}>{task.title}</h3>
                            <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                                {task.teacher}  &#9679; {task.date}
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
                                }} >Edit Task</MenuItem>
                                <MenuItem onClick={deleteClassroom} >Delete Task</MenuItem>
                            </MenuList>
                        </Menu> : null}
                    </Flex>
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                    <div style={{ width: "100%" }}>

                        <pre >{task.description}</pre>

                    </div>
                    <br />
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <TaskButton />
                    </div>

                </Flex>
            </Flex>
            <Footer />
        </>
    );
}

export default TaskDetails;
