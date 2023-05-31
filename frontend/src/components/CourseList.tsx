import { Flex } from "@chakra-ui/react";
import Course from "../components/Course";
import { Button } from "@chakra-ui/react";


const CourseList = ({ classroom }) => {
    return (
        <>
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
                }}
            >Add course</Button>
            </div>
        </>
    );
};
export default CourseList;