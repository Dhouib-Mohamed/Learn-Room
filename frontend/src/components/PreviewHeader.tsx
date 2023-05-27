import {UserContext} from "../context/user";
import {useHistory} from "react-router-dom";
import {Box, Button, Flex, HStack, Text} from "@chakra-ui/react";
import {useContext} from "react";
import logo from "../assets/logo.png";

export default function PreviewHeader() {
    const {disconnect} = useContext(UserContext)
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
                <Button marginRight={"15px"} colorScheme="custom"
                    color="grey"
                    bgColor="#FFF"
                    borderWidth="1px" // Set the border width
                    borderColor="grey" rounded="full" size="md" onClick={() => {
                        disconnect();
                    history.push("/signin")
                }}>
                    Sign In
                </Button>
                <Button colorScheme="custom"
                    color="white"
                    bgColor="#12B7BD" rounded="full" size="md" onClick={() => {
                        disconnect();
                        history.push("/signup")
                    }}>
                        Sign Up
                </Button>
            </Box>
        </Flex>
    );
}
