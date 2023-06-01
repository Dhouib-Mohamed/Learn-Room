import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalContent,
    ModalOverlay,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useDisclosure,
} from '@chakra-ui/react';
import { useHistory, useParams } from "react-router-dom";
import { images } from "../data/images.jsx";
import CourseList from "../components/CourseList";
import TaskList from "../components/TaskList";
import Students from "../components/Students";
import { get, post, remove } from "../helpers/helpers";
import { useEffect, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { getItem, setItem } from "../../utils/localStorage";
import ClassroomModal from "../modals/classroom";


const Classroom = ({ }) => {
    let { id } = useParams();
    const [classroom, setClassroom] = useState({})
    const history = useHistory();
    const getClassroom = async () => {
        const result = await get("classroom/" + id)
        setClassroom(result)
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    const deleteClassroom = async () => {
        const response = await remove("classroom/" + id)
        setItem("user", response)
        history.push('/home');
    }



    useEffect(() => {
        getClassroom()
    }, [])
    console.log(classroom)

    const editClassroom = async (data) => {
        const result = await post("classroom/" + id, data)
        console.log(result)
        setItem("user", result)
        onClose();
        history.push(`/classroom/${result.id}`);

    }

    const handleSubmit = (values) => {
        editClassroom(values)
    };



    return (
        <>
            <Box marginLeft={100} marginRight={100} p={4} pt={0}>
                <Heading as="h2" size="lg" mb={4}>
                    <Image
                        style={{ objectFit: "cover" }}
                        src={images[classroom?.image_id ?? 0]}
                        alt='Green double couch with wooden legs'
                        borderBottomRadius='lg'
                        height={"280px"}
                        width={"100%"}
                    />
                    <Flex style={{ flexDirection: 'row', padding: "15px 0 15px 0" }}>
                        <h3 style={{ color: "#41a090", width: "99%" }}> {classroom?.name}</h3>
                        {getItem("user").user ? <Menu>
                            <MenuButton
                                fontSize={"25px"}
                                style={{ marginTop: 2 }}
                                as={IconButton}
                                aria-label='Options'
                                icon={<AiOutlineMore />}
                                variant='outline'
                                border={false}
                            />
                            <MenuList style={{ fontSize: "15px" }}>
                                <MenuItem onClick={() => {
                                    onOpen()

                                }} >Edit Classroom</MenuItem>

                                <MenuItem onClick={deleteClassroom} >Delete Classroom</MenuItem>

                            </MenuList>

                        </Menu> : null}

                    </Flex>
                    <div style={{ fontWeight: 400, fontSize: 18 }}>{classroom?.description}</div>

                </Heading>
                <Divider mb={4} />

                <Tabs variant='soft-rounded' colorScheme='green' >
                    <TabList>
                        <Tab>Courses</Tab>
                        <Tab>Tasks and assignments</Tab>
                        <Tab>Students</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <CourseList classroom={classroom} />
                        </TabPanel>
                        <TabPanel>
                            <TaskList taskAssignList={classroom?.taskassignlist} />
                        </TabPanel>
                        <TabPanel>
                            <Students />
                        </TabPanel>
                    </TabPanels>

                </Tabs>


            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ClassroomModal title={"Edit Classroom"} onClose={onClose} handleSubmit={handleSubmit} />
                </ModalContent>
            </Modal>
        </>
    );
};

export default Classroom;


