import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {ConnectedContext} from "../context/connected.tsx";
import {useNavigate} from "react-router-dom";



export default function PreviewHeader() {
    const {setIsConnected} = useContext(ConnectedContext)
    const navigate = useNavigate()
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            py="4"
            px="6"
            bg="gray.100"
        >
            <Box>
                <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                    LearnRoom
                </Text>
            </Box>
            <Box>
                <Button colorScheme="blue" rounded="full" size="md" onClick={() => {
                    setIsConnected(true);
                    navigate("/home")
                }}>
                    Sign In
                </Button>
            </Box>
        </Flex>
    );
}
