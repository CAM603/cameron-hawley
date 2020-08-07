import styled from "@emotion/styled";

export default function Navigation() {
    return (
        <NavigationStyled>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
        </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`
    ul {
        list-style-type: none;
        display: flex;

        li {
            margin-left: 15px;
            font-size: 1.5rem;
            color: white;
        }
    }
`;
