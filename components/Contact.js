// Styles
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
// Assets
import { socials } from "../utils/icons";

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
                    <a key={icon.id} href={icon.link} target="_blank">
                        <Box variant="iconContact">{icon.icon}</Box>
                    </a>
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
    padding-bottom: 20px;

    .icons {
        width: 100%;
        max-width: 500px;
        display: flex;
        justify-content: space-around;
    }
`;
