// Components
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "reflexbox";

export default function Layout(props) {
    return (
        <>
            <Header />
            <Box as="main" variant="container">
                {props.children}
            </Box>
            <Footer />
        </>
    );
}
