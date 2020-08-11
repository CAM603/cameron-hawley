// Styles
import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";
// Components
import Card from "./Card";
// Utils
import projects from "../utils/projects";

export default function Projects() {
    return (
        <ProjectsStyled id="projects">
            <Box
                as="h2"
                variant="title"
                fontSize={{ _: "1.6rem", md: "2.2rem" }}
            >
                Projects
            </Box>
            <Flex flexDirection="column" alignItems="center">
                {projects.map((project) => (
                    <Box
                        key={project.name}
                        p={20}
                        variant="card"
                        maxWidth="800px"
                        width="100%"
                    >
                        <Card project={project} />
                    </Box>
                ))}
            </Flex>
        </ProjectsStyled>
    );
}

const ProjectsStyled = styled.section``;
