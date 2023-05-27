import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import {Box, Button, Flex, Text} from '@chakra-ui/react';
import {useContext} from "react";
import {UserContext} from "../context/user.tsx";
import {useHistory} from "react-router-dom";

const Header = () => {
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
                <Button colorScheme="blue" size="md" onClick={() => {
                    disconnect();
                    history.push("/preview")
                }}>
                    Sign Out
                </Button>
            </Box>

    </Flex>
    );
};

export default Header;