import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ConnectedContext } from "../context/connected.tsx";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function PreviewHeader() {
    const { setIsConnected } = useContext(ConnectedContext)
    const navigate = useNavigate()
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            py="4"
            px="6"
            bg="white"
            borderBottom="0.75px solid #828282"
        >
            <HStack spacing={"2px"}>
            <img src={logo} alt="Logo" style={{ height: "24px", marginRight: "8px" }} />      
             <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                    LearnRoom
                </Text>
            </HStack>
            <Box>
                <Button colorScheme="custom" color="#4C4C4C" bgColor="#FFF" borderWidth="1px" borderColor="#828282" rounded="full" size="md" 
          height="45px" // Set the height of the button
          width="150px" onClick={()=>{
                    setIsConnected(true);
                    navigate("/home")
    }}
    >
                    Sign in
                </Button>
                
                <Button marginLeft="10px" colorScheme="custom" color="#FFF" bgColor="#12B7BD"
                    _hover={{ bgColor: "#12B7BD" }}
                    _active={{ bgColor: "#12B7BD" }} rounded="full" size="md" 
                    height="45px" // Set the height of the button
                    width="150px" onClick={() => {
                        setIsConnected(true);
                        navigate("/home")
                    }}>
                    Sign up
                </Button>
            </Box>
        </Flex>
    );
                }
