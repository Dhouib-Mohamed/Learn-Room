import Footer from '../components/Footer';
import Header from '../components/Header';
import {
    Button,
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
import {getItem} from "../../utils/localStorage";
import {AiOutlineMore} from "react-icons/ai";
import {useEffect, useState} from "react";
import {get, patch, remove} from "../helpers/helpers";
import AssignmentModal from "../modals/assignment";
import {useHistory, useParams} from 'react-router-dom';


function AssignmentDetails() {
    let {id} = useParams();
    console.log(id)
    const [update, setUpdate] = useState(true)
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [assignment, setAssignment] = useState({name: "", content: "", deadline: ""})
    const history = useHistory();
    const getAssignment = async () => {
        const result = await get("assignment/" + id)
        setAssignment(result)
    }
    useEffect(() => {
        getAssignment()
    }, [update])
    const deleteAssignment = async () => {
        await remove("assignment/" + id)
        history.goBack();
    }

    const editTask = async (data) => {
        const result = await patch("assignment/" + id, data)
        console.log("res:", result)
        onClose();
        setUpdate(!update)
    }

    const handleSubmit = (values) => {

        editTask(values)

    };


    return (
        <>
            <div style={{ minHeight: "89vh", }}>
                <Header />

                <Flex style={{
                    flexDirection: "column", justifyContent: "center", margin: "20px 100px"
                }}>

                    <Flex flexDirection={"row"}>
                        <div style={{ width: "99%" }}>
                            <h3 style={{fontWeight: '600', fontSize: "24px"}}>{assignment.name}</h3>
                            <p style={{fontSize: '15px', fontWeight: 'lighter'}}>
                                {assignment.teacher}  &#9679; {assignment.deadline}
                            </p>
                            <div style={{height: '10px'}}></div>
                            <p style={{ fontSize: '16px', fontWeight: 'normal' }}>
                                {assignment.points} points
                            </p> </div>

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

                                }} >Edit Assignment</MenuItem>

                                <MenuItem onClick={deleteAssignment}>Delete Assignment</MenuItem>

                            </MenuList>

                        </Menu> : null}


                    </Flex>
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />

                    <div style={{ width: "100%" }}>
                        <pre>{assignment.content}</pre>
                    </div>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <Button colorScheme="custom" color="grey"
                                bgColor="#FFF"
                                borderWidth="1px"
                                borderColor="grey" rounded="full" type="submit" my="4" onClick={() => {
                        }}>Submit homework</Button>
                    </div>

                </Flex>
            </div>
            <Footer/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <AssignmentModal onClose={onClose} handleSubmit={handleSubmit} values={assignment}/>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AssignmentDetails;
