import styled from "@emotion/styled";
import { useContext } from "react";

import { ThemeContext } from "../pages/_app";

export const ToggleTheme = () => {
    const { colorTheme, setColorTheme } = useContext(ThemeContext);
    const changeTheme = () => {
        setColorTheme(colorTheme === "light" ? "dark" : "light");
    };

    return <ToggleThemeStyled onClick={changeTheme}>{colorTheme === "light" ? "☀️" : "🌛"}</ToggleThemeStyled>;
};

const ToggleThemeStyled = styled.span`
    padding-left: 2rem;
    cursor: pointer;
    font-size: 1.5rem;
`;
