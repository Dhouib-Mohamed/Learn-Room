import ClassroomList from "../components/ClassroomList";
import {getItem, setItem} from "../../utils/localStorage";
import {Button} from "@chakra-ui/react";
import {post} from "../helpers/helpers";


export default function Main() {

    let classrooms = getItem("user").classes

    const addClassroom = async () => {
        const result = await post("classroom/" + getItem("user").id, {
            "name": "course",
            "description": "ijgk efzsdihijovjbiig"
        })
        console.log(result)
        classrooms = {...getItem("user"), classes: [...getItem("user").classes, result]}
        setItem("user", classrooms)
    }
    return (
        <>
            <ClassroomList classrooms={classrooms}/>
            {getItem("user").user ?
                <Button onClick={addClassroom}>Add Classroom</Button> :
                null
            }
        </>
    )
}