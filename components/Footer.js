import styled from "@emotion/styled";

export default function Footer() {
    return (
        <FooterStyled>
            <p>
                Created with{" "}
                <a href="https://nextjs.org/" rel="external">
                    Next.js
                </a>{" "}
                by Cameron Hawley
            </p>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;

    p {
        line-height: 1.5;
        text-align: center;
        color: ${(props) => props.theme.colors.light};
    }

    a {
        text-decoration: underline;
        color: ${(props) => props.theme.colors.light};
    }
    a:hover {
        color: ${(props) => props.theme.colors.accent};
    }
`;
