import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export default function Contact() {
    return (
        <ContactStyled>
            <Box
                as="h2"
                variant="title"
                fontSize={{ _: "1.6rem", md: "2.2rem" }}
            >
                Contact
            </Box>
            <Flex justifyContent="space-around">
                <Box p={10}>Email</Box>
                <Box p={10}>GitHub</Box>
                <Box p={10}>LinkedIn</Box>
            </Flex>
        </ContactStyled>
    );
}

const ContactStyled = styled.section``;
