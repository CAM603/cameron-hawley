// Styles
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export default function Card({ project }) {
    const backgroundImage = project.image ? (
        <div
            className="image"
            style={{ backgroundImage: `url(${project.image})` }}
        ></div>
    ) : (
        <div className="no-image">In Development</div>
    );
    return (
        <CardStyled>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Box variant="project">
                {backgroundImage}
                <div className="links">
                    <Box
                        width={{ _: "35px", md: "50px" }}
                        height={{ _: "35px", md: "50px" }}
                        my={10}
                    >
                        <a href={project.github} target="_blank">
                            <img src="/images/github2.png" alt="github link" />
                        </a>
                    </Box>
                    <Box
                        width={{ _: "35px", md: "50px" }}
                        height={{ _: "35px", md: "50px" }}
                        my={10}
                    >
                        <a href={project.link} target="_blank">
                            <img src="/images/link3.png" alt="deployed link" />
                        </a>
                    </Box>
                </div>
            </Box>
            <Flex
                className="toolbox"
                flexDirection={{ _: "column", md: "row" }}
                justifyContent={{ _: "center", md: "space-around" }}
            >
                {project.tools.map((tool) => (
                    <p className="tool" key={tool}>
                        {tool}
                    </p>
                ))}
            </Flex>
        </CardStyled>
    );
}

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 1.5rem;
        text-decoration: underline;
        margin-bottom: 20px;
        font-weight: bold;
        text-align: center;
    }
    .image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 300px;
    }
    .no-image {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        background-color: grey;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
    }

    .toolbox {
        align-items: center;
        width: 100%;
        border-top: 1px solid black;
    }

    .tool {
        font-weight: bold;
        line-height: 1.5;
    }
`;
