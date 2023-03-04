import { useContext } from "react";
import styled from "@emotion/styled";
import { Box } from "reflexbox";

import { socials } from "../utils/icons";
import { ThemeContext } from "../pages/_app";

export default function Contact() {
    const { colorTheme } = useContext(ThemeContext);

    return (
        <ContactStyled colorTheme={colorTheme} id="contact">
            <Box as="h2" variant="title" fontSize={{ _: "1.6rem", md: "2.2rem" }}>
                Contact
            </Box>
            <div className="icons">
                {socials.map((icon) => (
                    <a key={icon.id} href={icon.link} target="_blank">
                        <Box className={icon.className} variant="iconContact">
                            {icon.icon}
                        </Box>
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
    color: ${(props) => props.theme[props.colorTheme].text};

    h2 {
        border-bottom: 1px solid ${(props) => props.theme[props.colorTheme].accent};
    }

    .icons {
        width: 100%;
        max-width: 500px;
        display: flex;
        justify-content: space-around;

        .github img {
            -webkit-filter: ${(props) => props.theme[props.colorTheme].image};
            filter: ${(props) => props.theme[props.colorTheme].image};
        }
    }
`;
