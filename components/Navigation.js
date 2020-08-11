// Styles
import styled from "@emotion/styled";
import { Flex } from "reflexbox";
import Link from "next/link";

export default function Navigation() {
    return (
        <NavigationStyled>
            <Flex
                as="ul"
                justifyContent={{ _: "space-around", md: "flex-end" }}
            >
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#projects">
                        <a>Projects</a>
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
            color: white;
        }
    }
`;
