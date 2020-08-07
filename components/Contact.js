// Styles
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
// Assets
import { socials } from "./icons";

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
            <Flex justifyContent="center">
                {socials.map((icon) => (
                    <Box key={icon.id} variant="iconContact">
                        {icon.icon}
                    </Box>
                ))}
            </Flex>
        </ContactStyled>
    );
}

const ContactStyled = styled.section``;
