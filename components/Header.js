// Styles
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
// Components
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
    return (
        <HeaderStyled>
            <Flex
                className="container"
                flexDirection={{ _: "column", sm: "row" }}
                justifyContent={{ _: "space-between", md: "space-between" }}
                height={{ _: "100%", sm: "80px" }}
            >
                <Link href="/">
                    <a>
                        <h1>Cameron Hawley</h1>
                    </a>
                </Link>
                <Navigation />
            </Flex>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    .container {
        width: 100%;
        max-width: 1200px;
        align-items: center;

        h1 {
            font-size: 2rem;
            text-align: center;
            color: white;
        }
    }
`;
