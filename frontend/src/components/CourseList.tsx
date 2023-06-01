import {Button, Flex, Modal, ModalContent, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import Course from "../components/Course";
import EmptyStatePlaceholder from "../components/EmptyStatePlaceholder";
import CourseModal from "../modals/course";
import {useHistory} from 'react-router-dom';
import {post} from "../helpers/helpers";


const CourseList = ({ classroom }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();

    const addCourse = async (data) => {
        console.log(classroom.id)
        console.log('data',data)
        const result = await post("course/" + classroom.id, data)
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
                {classroom.courses?.map((cours) => (
                    <Course
                        key={cours.id}
                        id={cours.id}
                        courseName={cours.title}
                        CourseDate={cours.CourseDate}
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