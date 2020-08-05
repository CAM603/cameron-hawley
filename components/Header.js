import styled from "@emotion/styled";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <HeaderStyled>
            <div>
                <h1>Logo</h1>
            </div>
            <Navigation />
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;
