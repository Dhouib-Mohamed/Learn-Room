import {Flex} from "@chakra-ui/react";
import Course from "../components/Course";


const CourseList = ({classroom}) => {
    return (
        <Flex direction={"column"} >
            {classroom.courses.map((cours) => (
                <Course
                    key={cours.id}
                    id={cours.id}
                    courseName={cours.title}
                    CourseDate={cours.CourseDate}
                />
            ))}
        </Flex>
    );
};
export default CourseList;