import styled from "@emotion/styled";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <HeaderStyled>
            <div className="container">
                <div>
                    <h1>Logo</h1>
                </div>
                <Navigation />
            </div>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px;
    display: flex;
    justify-content: center;

    .container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
    }
`;
