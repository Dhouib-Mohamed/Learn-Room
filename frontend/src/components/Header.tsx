import {Box, Button, Flex, HStack, Text} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import {useContext} from "react";
import {UserContext} from "../context/user";
import {useHistory} from "react-router-dom";

const Header = () => {
    const {disconnect} = useContext(UserContext);
    const history = useHistory();
    return (
        <>
            <Flex
                as="header"
                align="center"
                justify="space-between"
                py="4"
                px="6"
                bg="white"
                borderBottom="0.75px solid #828282"
                position="fixed"
                top="0"
                left="0"
                width="100%"
                zIndex="999"
            >
                <HStack spacing={"2px"} onClick={() => {
                    history.push("/home")
                }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            height: "42px",
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                    />
                    <Text fontSize="2xl" fontWeight="bolder" color="gray.700">
                        LearnRoom
                    </Text>
                </HStack>
                <Box>
                    <Button
                        colorScheme="custom"
                        color="grey"
                        bgColor="#FFF"
                        borderWidth="1px"
                        borderColor="grey"
                        rounded="full"
                        size="md"
                        onClick={() => {
                            disconnect();
                            history.push("/preview");
                        }}
                    >
                        Sign Out
                    </Button>
                </Box>
            </Flex>
            <div style={{height: 75}}></div>
        </>
    );
};

export default Header;
