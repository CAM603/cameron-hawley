// Styles
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export default function Card({ project }) {
    return (
        <CardStyled>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Box variant="project">
                <Flex
                    justifyContent={{ _: "space-between", md: "space-around" }}
                    alignItems="center"
                    flexDirection={{ _: "column", md: "row" }}
                    height="100%"
                    mb={20}
                >
                    <Box
                        width={{ _: "250px", md: "300px" }}
                        height={{ _: "250px", md: "300px" }}
                    >
                        <img src={project.image} alt={project.name} />
                    </Box>
                    <Box width={{ _: "100%", md: "50%" }}>
                        <Flex
                            flexDirection={{ _: "row", md: "row" }}
                            justifyContent={{
                                _: "space-around",
                                md: "space-around",
                            }}
                            alignItems={{ _: "center", md: "center" }}
                        >
                            <Box
                                width={{ _: "35px", md: "50px" }}
                                height={{ _: "35px", md: "50px" }}
                                my={10}
                            >
                                <a href={project.github} target="_blank">
                                    <img
                                        src="/images/github2.png"
                                        alt="github link"
                                    />
                                </a>
                            </Box>
                            <Box
                                width={{ _: "35px", md: "50px" }}
                                height={{ _: "35px", md: "50px" }}
                                my={10}
                            >
                                <a href={project.link} target="_blank">
                                    <img
                                        src="/images/link3.png"
                                        alt="deployed link"
                                    />
                                </a>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Flex
                flexDirection={{ _: "column", md: "row" }}
                justifyContent={{ _: "center", md: "space-around" }}
                alignItems={{ _: "center", md: "" }}
                width="100%"
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
    }

    img {
        width: 100%;
        height: 100%;
    }

    .tool {
        font-weight: bold;
        line-height: 1.5;
    }
`;
