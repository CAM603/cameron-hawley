import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Flex, Box } from "reflexbox";

import { ThemeContext } from "../pages/_app";

export default function Navigation() {
    const router = useRouter();
    const { colorTheme } = useContext(ThemeContext);

    let name = "About";
    let path = "/about";

    if (router.pathname === "/about") {
        name = "Home";
        path = "/";
    }

    return (
        <NavigationStyled colorTheme={colorTheme}>
            <Flex as="ul" justifyContent={{ _: "space-around", md: "flex-end" }}>
                <li>
                    <Link href={path}>
                        <Box as="a" fontSize={{ _: "1.3rem", md: "1.5rem" }}>
                            {name}
                        </Box>
                    </Link>
                </li>
            </Flex>
        </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`
    position: sticky;
    top: 0px;

    ul {
        list-style-type: none;

        li {
            margin-left: 15px;
            font-size: 1.5rem;
            color: ${(props) => props.theme[props.colorTheme].light};

            @media (max-width: 360px) {
                margin-top: 5px;
            }
        }
    }
`;
