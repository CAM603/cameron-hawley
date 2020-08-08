// Styles
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export default function Card() {
    return (
        <CardStyled>
            <h3>Name</h3>
            <Box variant="project">
                <Flex
                    justifyContent={{ _: "space-between", md: "space-between" }}
                    alignItems="center"
                    flexDirection={{ _: "column", md: "row" }}
                    height="100%"
                >
                    <div>Picture</div>
                    <Box width={{ _: "100%", md: "50%" }}>
                        <Flex
                            flexDirection={{ _: "row", md: "column" }}
                            justifyContent={{ _: "space-around", md: "center" }}
                            alignItems={{ _: "center", md: "flex-end" }}
                        >
                            <p>Github</p>
                            <p>Link</p>
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
                <p>JavaScript</p>
                <p>CSS</p>
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
    }
`;
