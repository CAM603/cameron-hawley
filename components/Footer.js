import styled from "@emotion/styled";
import { useContext } from "react";

import { ThemeContext } from "../pages/_app";

export default function Footer() {
    const { colorTheme } = useContext(ThemeContext);

    return (
        <FooterStyled colorTheme={colorTheme}>
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
    background-color: ${(props) => props.theme[props.colorTheme].primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;

    p {
        line-height: 1.5;
        text-align: center;
        color: ${(props) => props.theme[props.colorTheme].light};
    }

    a {
        text-decoration: underline;
        color: ${(props) => props.theme[props.colorTheme].light};
    }
    a:hover {
        color: ${(props) => props.theme[props.colorTheme].accent};
    }
`;
