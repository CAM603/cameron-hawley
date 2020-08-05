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
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
    max-width: 1200px;
    /* justify-content: center; */
    /* align-items: center; */
`;
