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
            <div className="projects">
                {projects.map((project) => (
                    <Box key={project.name} variant="card" maxWidth="500px">
                        <Card project={project} />
                    </Box>
                ))}
            </div>
        </ProjectsStyled>
    );
}

const ProjectsStyled = styled.section`
    .projects {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;
