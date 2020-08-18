// Styles
import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";
import Link from "next/link";

export default function Hero() {
    return (
        <HeroStyled>
            <Flex
                justifyContent="space-between"
                alignItems={{ _: "flex-start", md: "center" }}
                flexDirection={{ _: "column", md: "row" }}
            >
                <Box
                    width={{
                        _: "200px",
                        md: "250px",
                        lg: "300px",
                    }}
                    height={{
                        _: "200px",
                        md: "250px",
                        lg: "300px",
                    }}
                    as="div"
                    className="image"
                ></Box>
                <Box
                    as="div"
                    my={20}
                    pl={{ _: "0", md: "40px" }}
                    maxWidth="700px"
                    width={{ _: "100%", md: "70%" }}
                >
                    <Box as="h1" fontSize={{ _: "2rem", md: "2.6rem" }} mb={20}>
                        Hello! My name is Cameron Hawley. I'm a Full Stack Web
                        Developer, open to work.
                    </Box>
                    <p>
                        In October 2019 I was accepted to{" "}
                        <a
                            href="https://lambdaschool.com/courses/full-stack-web-development"
                            target="_blank"
                        >
                            Lambda School's
                        </a>{" "}
                        Full Stack Web Development and Computer Science program.
                        The following is a brief overview of work I completed
                        and technologies I learned during my time at Lambda
                        School. Read more{" "}
                        <Link href="/about">
                            <a>about me.</a>
                        </Link>
                    </p>
                    <a
                        href="mailto:cameronhawley@comcast.net"
                        className="button"
                    >
                        Contact me
                    </a>
                </Box>
            </Flex>
        </HeroStyled>
    );
}

const HeroStyled = styled.section`
    width: 100%;
    padding: 42px 0;
    color: ${(props) => props.theme.colors.primary};

    .image {
        background-image: url("/images/cameron.jpeg");
        background-size: cover;
        background-position: 36% 0%;
        background-repeat: no-repeat;
        -webkit-border-radius: 14px;
        -moz-border-radius: 14px;
        border-radius: 14px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;

        a {
            font-weight: bold;
            text-decoration: underline;
            color: ${(props) => props.theme.colors.secondary};
        }
        a:hover {
            color: ${(props) => props.theme.colors.accent};
        }
    }

    a.button {
        margin-top: 20px;
        display: inline-block;
        background-color: ${(props) => props.theme.colors.accent};
        box-shadow: 0 4px 14px 0 rgba(8, 172, 181, 0.39);
        color: white;
        padding: 0.7rem 3rem;
        border-radius: 10px;
        min-width: 120px;
        -webkit-appearance: none;
        text-decoration: none;
    }
    a.button:hover {
        background: rgba(8, 172, 181, 0.9);
        box-shadow: 0 6px 20px rgba(8, 172, 181, 0.23);
    }
`;
