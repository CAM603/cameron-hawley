// Styles
import { Flex, Box } from "reflexbox";
// Components
import Layout from "../components/layout/layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <div>
                <Skills />
                <Projects />
                <Contact />
            </div>
        </Layout>
    );
}
