import {Box, Button, Divider, Flex, HStack, Text} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import {useHistory} from "react-router-dom";
import {getItem, removeItem} from "../../utils/localStorage";

const Header = () => {
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
                    <Divider borderColor={"#20b2aa"}  sx= { { borderRightWidth: "2.5px" }} style={{margin:"0 10px"  }}  orientation='vertical' height={"30px"}  />
                    {getItem("user").user ? <Text fontSize="xl" fontWeight="bolder" color="gray.700">Teacher</Text> : <Text fontSize="xl" fontWeight="bolder" color="gray.700">
                        Student
                    </Text> }
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
                            removeItem("user")
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
