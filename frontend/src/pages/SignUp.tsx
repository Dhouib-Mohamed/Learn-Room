import { Box, Button, Heading, Text, FormControl, FormLabel, Input, Link } from '@chakra-ui/react';
import signin from "../assets/signin.png";
import Footer from '../components/Footer';
import logo from "../assets/logo.png";
import { UserContext } from '../context/user';
import { useContext } from 'react';
import { useHistory } from "react-router-dom";


function SignUp() {
    const {setUserId, getUserId} = useContext(UserContext)
    const history =  useHistory()
    return (
        <>
            <div style={{ height: '900px', display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: 'center' }}>

                    <Box textAlign="center">

                        <div style={{ display: "flex", alignItems: "center", marginBottom: "100px" }}>
                            <img src={logo} alt="Logo" style={{ width: "60px", marginRight: "20px" }} />
                            <Heading>LearnRoom</Heading>
                        </div>

                        <form>
                            <FormControl id="name" my="4">
                                <FormLabel>Name:</FormLabel>
                                <Input type="text" name="name" />
                            </FormControl>

                            <FormControl id="surname" my="4">
                                <FormLabel>Surname:</FormLabel>
                                <Input type="text" name="surname" />
                            </FormControl>

                            <FormControl id="phone" my="4">
                                <FormLabel>Phone Number:</FormLabel>
                                <Input type="tel" name="phone" />
                            </FormControl>
                            <FormControl id="email" my="4">
                                <FormLabel>Email:</FormLabel>
                                <Input type="email" name="email" />
                            </FormControl>

                            <FormControl id="password" my="4">
                                <FormLabel>Password:</FormLabel>
                                <Input type="password" name="password" />
                            </FormControl>

                            <Button colorScheme="custom" color="white" bgColor="#FF796E" rounded="full" type="submit" my="4" onClick={() => {
                        setUserId("1");
                        console.log(getUserId())
                        history.push("/home")
                    }}>Login</Button>

                        </form>

                        <Text fontSize={'14px'}>Already have an account? <Link fontWeight={'bold'} href="/signin">Sign in</Link></Text>
                    </Box>
                </div>

                <div style={{ flex: 3 }}>
                    <img src={signin} alt="landing image" style={{ width: '1000px' }} />

                </div>
            </div>
            <Footer /></>
    );
}

export default SignUp;
