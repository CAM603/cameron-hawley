import Layout from "../components/layout/layout";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <Layout>
            <section>
                <Hero />
            </section>
            <div>
                <section>
                    <h2>Projects</h2>
                </section>
                <section>
                    <h2>Skills</h2>
                </section>
                <section>
                    <h2>Contact</h2>
                </section>
            </div>
        </Layout>
    );
}
