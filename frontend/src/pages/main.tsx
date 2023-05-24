import ClassroomList from "../components/ClassroomList.tsx";
import {classrooms} from "../data/classrooms.ts";


export default function Main() {
    return (
        <>
            <ClassroomList classrooms={classrooms}/>
        </>
    )
}