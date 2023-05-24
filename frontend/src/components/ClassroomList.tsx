import ClassroomCard from './ClassroomCard';
import {Flex} from "@chakra-ui/react";

const ClassroomList = ({classrooms}) => {
    return (
        <Flex overflowX="auto">
            {classrooms.map((classroom) => (
                <ClassroomCard
                    key={classroom.id}
                    id={classroom.id}
                    title={classroom.title}
                    description={classroom.description}
                    imageUrl={classroom.imageUrl}
                />
            ))}
        </Flex>
    );
};


export default ClassroomList;