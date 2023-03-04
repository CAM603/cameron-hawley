import styled from "@emotion/styled";
import { Box } from "reflexbox";
import { useContext } from "react";

import Skill from "./Skill";
import { icons } from "../utils/icons";
import { ThemeContext } from "../pages/_app";

export default function Skills() {
    const { colorTheme } = useContext(ThemeContext);

    return (
        <SkillsStyled colorTheme={colorTheme}>
            <Box as="h2" variant="title" fontSize={{ _: "1.6rem", md: "2.2rem" }}>
                Core Technologies
            </Box>
            <Box width="90%" variant="card" bg={colorTheme === "light" ? "white" : "#212121"}>
                <div className="icons">
                    {icons.map((icon) => (
                        <Box key={icon.id} variant="icon">
                            {icon.icon}
                        </Box>
                    ))}
                </div>
            </Box>
        </SkillsStyled>
    );
}

const SkillsStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme[props.colorTheme].text};

    h2 {
        border-bottom: 1px solid ${(props) => props.theme[props.colorTheme].accent};
    }
    .icons {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;
