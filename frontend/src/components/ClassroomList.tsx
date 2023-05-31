import ClassroomCard from './ClassroomCard';
import {Flex} from "@chakra-ui/react";

const ClassroomList = ({classrooms}) => {
    return (
        <Flex overflowX="auto">
            {classrooms?.map((classroom) => (
                <ClassroomCard
                    key={classroom.id}
                    classroom={classroom}
                />
            ))}
        </Flex>
    );
};


export default ClassroomList;