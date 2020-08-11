// Styles
import styled from "@emotion/styled";
// Components
import Layout from "../components/layout/layout";

export default function About() {
    return (
        <Layout>
            <AboutStyled>
                <h1>About</h1>
                <p>Something about me</p>
            </AboutStyled>
        </Layout>
    );
}

const AboutStyled = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 2rem;
    }
`;
