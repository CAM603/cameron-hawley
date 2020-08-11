// Styles
import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";

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
                >
                    <img src="/images/profile.jpeg" alt="cameron" />
                </Box>
                <Box
                    as="div"
                    my={20}
                    pl={{ _: "0", md: "20px" }}
                    maxWidth="700px"
                    width={{ _: "100%", md: "60%" }}
                >
                    <Box as="h1" fontSize={{ _: "2rem", md: "2.6rem" }} mb={20}>
                        Hello! My name is Cameron Hawley. I'm a full stack web
                        developer
                    </Box>
                    <p>
                        Something something about me. I am Cam. I do coding and
                        I love it. I would love to work with and or for you!
                    </p>
                    <button>Contact me</button>
                </Box>
            </Flex>
        </HeroStyled>
    );
}

const HeroStyled = styled.section`
    width: 100%;
    margin: 42px 0;

    img {
        border-radius: 14px;
        height: 100%;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
    }
    button {
        margin-top: 20px;
    }
`;
