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

const NavigationStyled = styled.div`
    ul {
        list-style-type: none;
        display: flex;

        li {
            margin-left: 10px;
        }
    }
`;
