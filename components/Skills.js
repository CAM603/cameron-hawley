import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

let icons = [
    <span>👻</span>,
    <span>😈</span>,
    <span>🤖</span>,
    <span>🎃</span>,
    <span>💩</span>,
];

export default function Skills() {
    return (
        <SkillsStyled>
            <Box as="h2" variant="title">
                Skills
            </Box>
            <Flex justifyContent="center">
                <Box width="90%" variant="card">
                    <Flex
                        justifyContent="space-between"
                        flexDirection={{ _: "row", md: "row" }}
                        flexWrap="wrap"
                    >
                        {icons.map((el) => (
                            <Box padding={30}>{el}</Box>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </SkillsStyled>
    );
}

const SkillsStyled = styled.section``;
