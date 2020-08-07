import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
import { icons } from "./icons";

export default function Skills() {
    return (
        <SkillsStyled>
            <Box
                as="h2"
                variant="title"
                fontSize={{ _: "1.6rem", md: "2.2rem" }}
            >
                Skills
            </Box>
            <Flex justifyContent="center">
                <Box width="90%" variant="card">
                    <Flex
                        justifyContent="space-around"
                        flexDirection={{ _: "row", md: "row" }}
                        flexWrap="wrap"
                    >
                        {icons.map((icon) => (
                            <Box key={icon.id} variant="icon">
                                {icon.icon}
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </SkillsStyled>
    );
}

const SkillsStyled = styled.section``;
