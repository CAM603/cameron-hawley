import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

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
                        <div>Icons here</div>
                    </Flex>
                </Box>
            </Flex>
        </SkillsStyled>
    );
}

const SkillsStyled = styled.section``;
