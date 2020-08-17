// Styles
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme/theme";
// SEO
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
