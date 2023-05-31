import {Box, Divider, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs,} from '@chakra-ui/react';

import {useParams} from "react-router-dom";
import {images} from "../data/images.jsx";
import CourseList from "../components/CourseList";
import TaskList from "../components/TaskList";
import Students from "../components/Students";

import {get} from "../helpers/helpers";
import {useEffect, useState} from "react";


const Classroom = ({}) => {
    let {id} = useParams();
const [classroom,setClassroom] = useState({})
    const getClassroom = async () => {
        const result = await get("classroom/"+id)
         setClassroom(result)
    }

        useEffect( ()=> {
           getClassroom()
        } , [])
    console.log(classroom)
    return (
        <Box marginLeft={100} marginRight={100} p={4} pt={0}>
            <Heading as="h2" size="lg" mb={4}>
                <Image
                    style={{objectFit: "cover"}}
                    src={images[classroom?.image_id??0]}
                    alt='Green double couch with wooden legs'
                    borderBottomRadius='lg'
                    height={"280px"}
                    width={"100%"}
                />
                <h3 style={{color: "#41a090", padding: "15px 0 15px 0"}}> {classroom?.title}</h3>
                <div style={{fontWeight: 400, fontSize: 18}}>{classroom?.description}</div>

            </Heading>
            <Divider mb={4}/>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>Courses</Tab>
                    <Tab>Tasks and assignments</Tab>
                    <Tab>Students</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <CourseList classroom={classroom}/>
                    </TabPanel>
                    <TabPanel>
                        <TaskList classroom={classroom} />
                    </TabPanel>
                    <TabPanel>
                        <Students />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            {/*<Flex mb={4}>*/}
            {/*    <Box w="50%">*/}
            {/*        <Heading as="h3" size="md" mb={2}>*/}
            {/*            Tasks*/}
            {/*        </Heading>*/}
            {/*        <List spacing={3}>*/}
            {/*            {classroom.tasks.map((task) => (*/}
            {/*                <ListItem key={task.id}>*/}
            {/*                    <ListIcon as={CheckCircleIcon} color="green.500"/>*/}
            {/*                    {task.title}*/}
            {/*                </ListItem>*/}
            {/*            ))}*/}
            {/*        </List>*/}
            {/*    </Box>*/}
            {/*    <Box w="50%">*/}
            {/*        <Heading as="h3" size="md" mb={2}>*/}
            {/*            Assignments*/}
            {/*        </Heading>*/}
            {/*        <List spacing={3}>*/}
            {/*            {classroom.assignments.map((assignment) => (*/}
            {/*                <ListItem key={assignment.id}>*/}
            {/*                    <ListIcon as={CheckCircleIcon} color="green.500"/>*/}
            {/*                    {assignment.title}*/}
            {/*                </ListItem>*/}
            {/*            ))}*/}
            {/*        </List>*/}
            {/*    </Box>*/}
            {/*</Flex>*/}
        </Box>
    );
};

export default Classroom;
