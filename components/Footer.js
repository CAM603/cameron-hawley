import styled from "@emotion/styled";

export default function Footer() {
    return (
        <FooterStyled>
            <p>Created with Next.js by Cameron Hawley</p>
            <p>
                Icons by{" "}
                <a href="https://icons8.com/" target="_blank" rel="external">
                    icons8
                </a>
            </p>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 60px 30px;

    p {
        line-height: 1.5;
    }
`;
