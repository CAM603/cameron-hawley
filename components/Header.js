import { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
import Link from "next/link";

import Navigation from "./Navigation";
import { ToggleTheme } from "./ToggleTheme";
import { ThemeContext } from "../pages/_app";

export default function Header() {
    const { colorTheme } = useContext(ThemeContext);

    return (
        <HeaderStyled colorTheme={colorTheme}>
            <Flex className="container" flexDirection={{ _: "column", sm: "row" }} justifyContent={{ _: "space-between", md: "space-between" }}>
                <Link href="/">
                    <a>
                        <Box as="h1" fontSize={{ _: "1.8rem", md: "2rem" }}>
                            Cameron Hawley
                        </Box>
                    </a>
                </Link>

                <Flex justifyContent={{ _: "space-between", md: "space-between" }} alignItems={{ _: "center", md: "center" }}>
                    <Navigation />
                    <ToggleTheme />
                </Flex>
            </Flex>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    position: sticky;
    top: 0px;
    z-index: 1000;
    background-color: ${(props) => props.theme[props.colorTheme].primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 4px solid ${(props) => props.theme[props.colorTheme].accent};

    .container {
        width: 100%;
        max-width: 1200px;
        align-items: center;

        h1 {
            text-align: center;
            color: ${(props) => props.theme[props.colorTheme].light};
        }
    }
`;
