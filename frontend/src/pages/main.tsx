import ClassroomList from "../components/ClassroomList";
import {getItem} from "../../utils/localStorage";


export default function Main() {
    const classrooms = getItem("user").classes
    return (
        <>
            <ClassroomList classrooms={classrooms}/>
        </>
    )
}