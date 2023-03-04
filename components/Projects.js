import styled from "@emotion/styled";
import { Box } from "reflexbox";
import { useContext } from "react";

import Card from "./Card";
import projects from "../utils/projects";
import { ThemeContext } from "../pages/_app";

export default function Projects() {
    const { colorTheme } = useContext(ThemeContext);

    return (
        <ProjectsStyled colorTheme={colorTheme} id="projects">
            <Box as="h2" variant="title" fontSize={{ _: "1.6rem", md: "2.2rem" }}>
                Projects
            </Box>
            <div className="projects">
                {projects.map((project) => (
                    <Box key={project.name} variant="card" bg={colorTheme === "light" ? "white" : "#212121"} maxWidth="500px">
                        <Card project={project} />
                    </Box>
                ))}
            </div>
        </ProjectsStyled>
    );
}

const ProjectsStyled = styled.section`
    color: ${(props) => props.theme[props.colorTheme].text};

    h2 {
        border-bottom: 1px solid ${(props) => props.theme[props.colorTheme].accent};
    }

    .projects {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;
