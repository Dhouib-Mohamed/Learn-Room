import { Box, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import notfound from "../assets/notfound.png";


function NotFound() {
    return (
        <>
            <Header />
            <div style={{ display: 'flex',height:"750px", justifyContent: 'center', alignItems: 'center' }}>
                <img src={notfound} alt="quote" />
            </div></>
    );
}

export default NotFound;
