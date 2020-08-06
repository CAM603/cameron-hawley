import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";

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
                <Box p={20} variant="card">
                    Cool project1
                </Box>
                <Box p={20} variant="card">
                    Cool project2
                </Box>
                <Box p={20} variant="card">
                    Cool project3
                </Box>
            </Flex>
        </ProjectsStyled>
    );
}

const ProjectsStyled = styled.section``;
