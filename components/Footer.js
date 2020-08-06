import styled from "@emotion/styled";

export default function Footer() {
    return (
        <FooterStyled>
            <p>Created with Next.js by Cameron Hawley</p>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    padding: 60px 30px;
`;
