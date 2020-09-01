// Styles
import styled from "@emotion/styled";
// Components
import { Flex, Box } from "reflexbox";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
    const router = useRouter();

    let name = "About";
    let path = "/about";

    if (router.pathname === "/about") {
        name = "Home";
        path = "/";
    }

    return (
        <NavigationStyled>
            <Flex
                as="ul"
                justifyContent={{ _: "space-around", md: "flex-end" }}
            >
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
    ul {
        list-style-type: none;

        li {
            margin-left: 15px;
            font-size: 1.5rem;
            color: ${(props) => props.theme.colors.light};

            @media (max-width: 360px) {
                margin-top: 5px;
            }
        }
    }
`;
