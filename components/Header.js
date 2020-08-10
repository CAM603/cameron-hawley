// Styles
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
// Components
import Navigation from "./Navigation";

export default function Header() {
    return (
        <HeaderStyled>
            <Flex
                className="container"
                flexDirection={{ _: "column", md: "row" }}
                justifyContent={{ _: "space-around", md: "space-between" }}
            >
                <h1>Cameron Hawley</h1>
                <Navigation />
            </Flex>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;

    .container {
        width: 100%;
        max-width: 1200px;
        align-items: center;
        height: 100%;

        h1 {
            font-size: 2.2rem;
        }
    }
`;
