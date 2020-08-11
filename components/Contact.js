// Styles
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
// Assets
import { socials } from "./icons";

export default function Contact() {
    return (
        <ContactStyled id="contact">
            <Box
                as="h2"
                variant="title"
                fontSize={{ _: "1.6rem", md: "2.2rem" }}
            >
                Contact
            </Box>
            <div className="icons">
                {socials.map((icon) => (
                    <Box key={icon.id} variant="iconContact">
                        {icon.icon}
                    </Box>
                ))}
            </div>
        </ContactStyled>
    );
}

const ContactStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .icons {
        width: 100%;
        max-width: 500px;
        display: flex;
        justify-content: space-around;
    }
`;
