import {Box, Heading} from '@chakra-ui/react';

const Header = () => {
    return (
        <Box bg="blue.500" w="100%" p={4} backgroundColor={"#0dd4b3"} color="white">
            <Heading>LearnRoom</Heading>
        </Box>
    );
};

export default Header;