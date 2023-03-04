import { Box } from "reflexbox";
import styled from "@emotion/styled";
import { useContext } from "react";

import Header from "../Header";
import Footer from "../Footer";
import { ThemeContext } from "../../pages/_app";

export default function Layout(props) {
    const { colorTheme } = useContext(ThemeContext);

    return (
        <LayoutStyled colorTheme={colorTheme}>
            <Header />
            <Box as="main" variant="container" px={{ _: "10px", sm: "30px" }}>
                {props.children}
            </Box>
            <Footer />
        </LayoutStyled>
    );
}

const LayoutStyled = styled.div`
    background: ${(props) => props.theme[props.colorTheme].background};
`;
