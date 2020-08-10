// Styles
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

export default function Navigation() {
    return (
        <NavigationStyled>
            <Flex
                as="ul"
                justifyContent={{ _: "space-around", md: "flex-end" }}
            >
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <a href="/">Projects</a>
                </li>
            </Flex>
        </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`
    ul {
        list-style-type: none;

        li {
            margin-left: 15px;
            font-size: 1.5rem;
            color: white;
        }
    }
`;
