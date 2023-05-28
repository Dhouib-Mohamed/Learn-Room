import {Box, Button, FormControl, FormLabel, Heading, Input, Link, Text} from '@chakra-ui/react';
import signup from "../assets/signup.png";
import Footer from '../components/Footer';
import logo from "../assets/logo.png";
import {UserContext} from '../context/user';
import {useContext} from 'react';
import {useHistory} from "react-router-dom";


function SignIn() {
    const {setUserId, getUserId} = useContext(UserContext)
    const history =  useHistory()
    return (
        <>
        <div style={{height: '700px', display: 'flex', alignItems: 'center'}}>
            <div style={{flex: 2, display: "flex", alignItems: "center", justifyContent: 'center'}}>

                <Box textAlign="center">

                    <div style={{display: "flex", alignItems: "center", marginBottom: "100px"}}>
                        <img src={logo} alt="Logo" style={{width: "60px", marginRight: "20px"}}/>
                        <Heading>LearnRoom</Heading>
                    </div>

                    <form>
                    <FormControl id="email" my="4">
                        <FormLabel>Email:</FormLabel>
                        <Input type="email" name="email" />
                    </FormControl>

                    <FormControl id="password" my="4">
                        <FormLabel>Password:</FormLabel>
                        <Input type="password" name="password" />
                    </FormControl>

                    <Button colorScheme="custom" color="white"  bgColor="#FF796E" rounded="full"  type="submit"  my="4"  onClick={() => {
                        setUserId("1");
                        console.log(getUserId())
                        history.push("/home")
                    }}>Login</Button>

                </form>
                
                <Text fontSize={'14px'}>Don't have an account? <Link fontWeight={'bold'} href="/signup">Sign up</Link></Text>
            </Box>
        </div>

        <div style={{ flex: 3 }}>
            <img src={signup} alt="landing image" style={{ width: '1000px',marginTop:'50px' }} />

        </div>
    </div>
    <Footer /></>
    );
}

export default SignIn;
