// Styles
import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";
// Components
import Card from "./Card";
// Utils
import projects from "../utils/projects";

export default function Projects() {
    return (
        <ProjectsStyled>
            <Box
                as="h2"
                variant="title"
                fontSize={{ _: "1.6rem", md: "2.2rem" }}
            >
                Projects
            </Box>
            <Flex flexDirection="column">
                {projects.map((project) => (
                    <Box p={20} variant="card">
                        <Card project={project} />
                    </Box>
                ))}
            </Flex>
        </ProjectsStyled>
    );
}

const ProjectsStyled = styled.section``;
