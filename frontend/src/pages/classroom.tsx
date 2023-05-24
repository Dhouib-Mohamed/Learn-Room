import {Box, Divider, Flex, Heading, List, ListIcon, ListItem, Text} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons';
import {useParams} from "react-router-dom";
import {classrooms} from "../data/classrooms.ts";

const Classroom = ({}) => {
    let {id} = useParams();
    console.log(id)
    const classroom = classrooms.find((e) => e.id === +id)
    return (
        <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>
                {classroom.title}
            </Heading>
            <Text fontSize="lg" mb={4}>
                {classroom.description}
            </Text>
            <Divider mb={4}/>
            <Flex mb={4}>
                <Box w="50%">
                    <Heading as="h3" size="md" mb={2}>
                        Tasks
                    </Heading>
                    <List spacing={3}>
                        {classroom.tasks.map((task) => (
                            <ListItem key={task.id}>
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                {task.title}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box w="50%">
                    <Heading as="h3" size="md" mb={2}>
                        Assignments
                    </Heading>
                    <List spacing={3}>
                        {classroom.assignments.map((assignment) => (
                            <ListItem key={assignment.id}>
                                <ListIcon as={CheckCircleIcon} color="green.500"/>
                                {assignment.title}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Flex>
        </Box>
    );
};

export default Classroom;
