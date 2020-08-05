// import "../styles/globals.css";
// Styles
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme/theme";
// Components
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
