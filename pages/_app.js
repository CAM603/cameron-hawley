import { ThemeProvider } from "emotion-theming";
import { DefaultSeo } from "next-seo";
import { createContext, useState } from "react";

import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme";
import SEO from "../next-seo.config";

export const ThemeContext = createContext({ colorTheme: "light", setColorTheme: () => {} });

function MyApp({ Component, pageProps }) {
    const [colorTheme, setColorTheme] = useState("light");
    const value = { colorTheme, setColorTheme };

    return (
        <>
            <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <ThemeContext.Provider value={value}>
                    <Component {...pageProps} />
                </ThemeContext.Provider>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
