import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const Header = () => {
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
        
    </Flex>
    );
};

export default Header;