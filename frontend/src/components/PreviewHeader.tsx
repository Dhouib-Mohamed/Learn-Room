import {UserContext} from "../context/user.tsx";
import {useHistory} from "react-router-dom";
import {Box, Button, Flex, HStack, Text} from "@chakra-ui/react";
import {useContext} from "react";
import logo from "../assets/logo.png";

export default function PreviewHeader() {
    const {setUserId, getUserId} = useContext(UserContext)
    const history = useHistory()
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
                <img src={logo} alt="Logo" style={{ height: "42px", marginRight: "10px", marginLeft: "10px" }} />
                <Text fontSize="2xl" fontWeight="bolder" color="gray.700">
                    LearnRoom
                </Text>
            </HStack>
            <Box>
                <Button colorScheme="blue" size="md" onClick={() => {
                    setUserId("1");
                    console.log(getUserId())
                    history.push("/home")
                }}>
                    Sign In
                </Button>
                <Button colorScheme="blue" size="md" onClick={() => {
                        setUserId("1");
                        console.log(getUserId())
                        history.push("/home")
                    }}>
                        Sign Up
                </Button>
            </Box>
        </Flex>
    );
}
