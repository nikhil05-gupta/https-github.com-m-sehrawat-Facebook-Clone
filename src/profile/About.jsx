import { Box, Heading } from "@chakra-ui/react";

export const About = () => {
    return (
        <>
            <Box bg={'#f0f2f5'} minH={'200px'} pt={3} >

                <Box w={'950px'} m={'auto'} border={'1px solid red'} >

                    <Heading>About</Heading>
                </Box>

            </Box>
        </>
    );
};