// Styles
import { Flex, Box } from "reflexbox";
// Components
import Layout from "../components/layout/layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <Layout>
            <Box variant="container">
                <Hero />
                <div>
                    <Projects />
                    <Skills />
                    <section>
                        <h2>Contact</h2>
                    </section>
                </div>
            </Box>
        </Layout>
    );
}
