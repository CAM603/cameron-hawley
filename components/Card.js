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
            <h3 className="name">{project.name}</h3>
            <p className="description">{project.description}</p>
            <div className="list">
                <ul>
                    {project.bullets.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </div>
            <Box variant="project">
                {backgroundImage}
                <div className="links">
                    <Box
                        width={{ _: "35px", md: "35px" }}
                        height={{ _: "35px", md: "35px" }}
                        my={10}
                    >
                        <a href={project.github} target="_blank">
                            <img
                                src="/images/icons/github.png"
                                alt="github link"
                            />
                        </a>
                    </Box>
                    <Box
                        width={{ _: "35px", md: "35px" }}
                        height={{ _: "35px", md: "35px" }}
                        my={10}
                    >
                        <a href={project.link} target="_blank">
                            <img
                                src="/images/icons/link.png"
                                alt="deployed link"
                            />
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
    color: ${(props) => props.theme.colors.primary};

    .name {
        font-size: 1.5rem;
        text-decoration: underline;
        margin-bottom: 20px;
        font-weight: bold;
        text-align: center;
    }
    .description {
        text-align: left;
    }

    .list {
        width: 100%;
        margin: 10px 0;

        ul {
            list-style-type: disc;
            list-style-position: inside;

            li {
                line-height: 1.5;
            }
        }
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
        padding-top: 10px;
    }

    .tool {
        font-weight: bold;
        line-height: 1.5;
    }
`;
