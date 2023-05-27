import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,} from '@chakra-ui/react';

import {useNavigate} from "react-router-dom";


const Course = ({id ,courseName,CourseDate}) => {
    const navigate = useNavigate()
    return (
        <Box>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={700} textAlign='left'>
                                Course {id}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel style={{display:"flex",flexDirection:"row"}} pb={4}>
                       <p onClick={() => {navigate(`/course/${id}`)}}>{courseName}</p>
                        <p style={{textAlign:"end"}} color={"red"}>{CourseDate}</p>
                </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </Box>
    );
};


export default Course;