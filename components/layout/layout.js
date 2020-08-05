// Styles
import styled from "@emotion/styled";
// Components
import Header from "../Header";
import Footer from "../Footer";

export default function Layout(props) {
    return (
        <div>
            <Header />
            <MainStyled>{props.children}</MainStyled>
            <Footer />
        </div>
    );
}

const MainStyled = styled.main`
    min-height: 90vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
