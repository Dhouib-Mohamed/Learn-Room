import ClassroomList from "../components/ClassroomList";
import {getItem, setItem} from "../../utils/localStorage";
import {Button, Modal, ModalContent, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import {post} from "../helpers/helpers";
import {useHistory} from 'react-router-dom';
import ClassroomModal from "../modals/classroom";

export default function Main() {
    let classroom = getItem("user").classes



    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();




    const addClassroom = async (data) => {
        const result = await post("classroom/" + getItem("user").id, data)
        console.log(result)
        classroom = {...getItem("user"), classes: [...getItem("user").classes, result]}
        setItem("user", classroom)

        onClose();

        history.push(`/classroom/${result.id}`);

    }

    const handleSubmit = (values) => {

     addClassroom(values)

    };
    return (
        <>
            <ClassroomList classrooms={classroom}/>
            {getItem("user").user ?
                <Button rounded={"full"}  onClick={onOpen} size={"lg"} style={{backgroundColor:"#20b2aa"  , color:"white" , marginLeft:"45%" , marginTop:"20px" , marginBottom:"50px"}} >Add Classroom</Button> :
                null
            }

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ClassroomModal title={"Add Classroom"} onClose={onClose} handleSubmit={handleSubmit}/>
                </ModalContent>
            </Modal>
        </>
    )
}