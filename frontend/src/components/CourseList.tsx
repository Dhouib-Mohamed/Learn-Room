import {Button, Flex, Modal, ModalContent, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import Course from "../components/Course";
import EmptyStatePlaceholder from "../components/EmptyStatePlaceholder";
import CourseModal from "../modals/course";
import {useHistory} from 'react-router-dom';
import {get, post} from "../helpers/helpers";
import {useEffect, useState} from "react";


const CourseList = ({ id }) => {
    const [update, setUpdate] = useState(true)

    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();

    const [courses,setCourses] = useState([])
    const getCourses = async () => {
        console.log("id  ",id)
        const result = await get("classroom/course/" + id)
        console.log("courselist",result)
        setCourses(result)

    }

    useEffect(() => {
        getCourses()
    }, [update])

    const addCourse = async (data) => {
        console.log(id)
        console.log('data',data)
        const result = await post("course/" + id, data)
        console.log(result)

        onClose();
        history.push(`./course/${result.id}`);
    }
   
    const handleSubmit = (values) => {

        addCourse(values)
   
    };
       

    return (
        <>
        <EmptyStatePlaceholder user={"student"} type={"course"}/>
            <Flex direction={"column"} >
                {courses?.map((cours) => (
                   
                    <Course
                        key={cours.id}
                        id={cours.id}
                        courseName={cours.name}
                        CourseDate={cours.date}
                        content={cours.content}
                        
                    />
                ))}
            </Flex>
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md" 
                height="30px"
                width="120px" onClick={() => {
                    onOpen()
                }}
            >Add course</Button>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <CourseModal onClose={onClose} handleSubmit={handleSubmit}/>
                </ModalContent>
            </Modal>
        </>
    );
};
export default CourseList;