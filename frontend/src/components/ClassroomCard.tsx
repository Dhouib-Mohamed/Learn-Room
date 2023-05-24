import {Box, Image, Text} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";

const ClassroomCard = ({id, title, description, imageUrl}) => {
    const navigate = useNavigate()
    return (
        <Box
            onClick={() => {
                navigate(`/classroom/${id}`)
            }}
            width={200}
            height={200}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
        >
            <Box position="absolute" w="100%" h="100%" bg="white"/>
            <Box position="absolute" w="100%" h="100%" bg="blue.500">
                <Image src={imageUrl} alt={title} w="100%" h="100%" objectFit="cover"/>
            </Box>
            <Box position="absolute" w="100%" h="100%">
                <Box p="6">
                    <Box display="flex" alignItems="baseline">
                        <Text fontSize="xl" fontWeight="bold" mr={2}>
                            {title}
                        </Text>
                    </Box>
                    <Text mt={2} color="gray.500">
                        {description}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};


export default ClassroomCard;