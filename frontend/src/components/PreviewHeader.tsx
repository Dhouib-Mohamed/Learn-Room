import { Flex, Box, Text, Button } from "@chakra-ui/react";

export default function PreviewHeader() {
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            py="4"
            px="6"
            bg="gray.100"
        >
            <Box>
                <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                    LearnRoom
                </Text>
            </Box>
            <Box>
                <Button colorScheme="blue" size="md">
                    Sign In
                </Button>
            </Box>
        </Flex>
    );
}
