import Header from '../components/Header';
import { classrooms } from "../data/classrooms.js";
import Footer from '../components/Footer.js';
import TaskList from '../components/TaskList.js';
import AssignmentModal from '../modals/assignment.js';
import {Button, Modal, ModalContent, ModalOverlay,Divider, useDisclosure} from "@chakra-ui/react";
import TaskModal from "../modals/task";
import {useHistory} from 'react-router-dom';



function CourseDetails() {

    const { isOpen:isOpen1, onOpen:onOpen1, onClose:onClose1 } = useDisclosure();
    const { isOpen:isOpen2, onOpen:onOpen2, onClose:onClose2 } = useDisclosure();
    
        const history = useHistory();
    
        const addTask = async (data) => {
            // const result = await post("task/" + getItem("user").id, data)
            // console.log(result)
            // onClose();
            // history.push(`/task/${result.id}`);
        }
        const addAssignment = async (data) => {
            // const result = await post("task/" + getItem("user").id, data)
            // console.log(result)
            // onClose();
            // history.push(`/task/${result.id}`);
        }
       
        const handleSubmit1 = (values) => {
            addTask(values)
        };
        const handleSubmit2 = (values) => {
            addAssignment(values)
        };

    const course = classrooms[0].courses[0]
    return (
        <>
            <div style={{ minHeight: "89vh", }}>
                <Header />
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: "center"
                }}>
                    <div style={{ width: "1000px", }}>
                        <h3 style={{ fontWeight: '600', fontSize: "24px" }}>{course.title}</h3>
                        <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                            {course.date}
                        </p>
                        <div style={{ height: '10px' }}></div>
                        <div style={{ width: "1000px", display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                            <div style={{ width: "950px" }}>
                                <pre >{course.description}</pre>
                            </div>
                        </div>
                        <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                        <br />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                            <TaskList taskAssignList={course.taskAssignList} />
                            <br />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md"
                                        height="30px"
                                        width="100px" onClick={() => { onOpen1() }}
                                    >Add a Task</Button>
                                    <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md"
                                        height="30px"
                                        width="170px" onClick={() => { onOpen2() }}
                                    >Add an Assignment</Button>
                                </div>
                            </div>

                            <Modal isOpen={isOpen1} onClose={onClose1}>
                                <ModalOverlay />
                                <ModalContent>
                                    <TaskModal onClose={onClose1} handleSubmit={handleSubmit1} />
                                </ModalContent>
                            </Modal>

                            <Modal isOpen={isOpen2} onClose={onClose2}>
                                <ModalOverlay />
                                <ModalContent>
                                    <AssignmentModal onClose={onClose2} handleSubmit={handleSubmit2} />
                                </ModalContent>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CourseDetails;
