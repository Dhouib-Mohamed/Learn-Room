import ClassroomList from "../components/ClassroomList";
import {classrooms} from "../data/classrooms.js";


export default function Main() {
    return (
        <>
            <ClassroomList classrooms={classrooms}/>
        </>
    )
}