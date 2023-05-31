import {useHistory} from "react-router-dom";
import {Box, Card, CardBody, Heading, Image, Stack, Text} from '@chakra-ui/react';
import {images} from "../data/images.jsx";

const ClassroomCard = ({id, title, description, imageUrl}) => {
    const history = useHistory()
    return (
      <Box  onClick={() => {
          history.push(`/classroom/${id}/`)
          
      }}
       >
          <Card maxW='sm' _hover={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    transition: 'box-shadow 0.3s ease-in-out',
                  }}  style={{ margin: 20}}>
              <CardBody>
                  <Image  
                      src={images[imageUrl]}
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                      height={"270px"}
                      width={"370px"}
                  />
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>{title}</Heading>
                      <Text>
                          {description}
                      </Text>
                  </Stack>
              </CardBody>

          </Card>
      </Box>




        // <Box
        //     onClick={() => {
        //         navigate(`/classroom/${id}`)
        //     }}
        //     width={200}
        //     height={200}
        //     maxW="sm"
        //     borderWidth="1px"
        //     borderRadius="lg"
        //     overflow="hidden"
        //     position="relative"
        // >
        //     <Box position="absolute" w="100%" h="100%" bg="white"/>
        //     <Box position="absolute" w="100%" h="100%" bg="blue.500">
        //         <Image src={imageUrl} alt={title} w="100%" h="100%" objectFit="cover"/>
        //     </Box>
        //     <Box position="absolute" w="100%" h="100%">
        //         <Box p="6">
        //             <Box display="flex" alignItems="baseline">
        //                 <Text fontSize="xl" fontWeight="bold" mr={2}>
        //                     {title}
        //                 </Text>
        //             </Box>
        //             <Text mt={2} color="gray.500">
        //                 {description}
        //             </Text>
        //         </Box>
        //     </Box>
        // </Box>
    );
};


export default ClassroomCard;