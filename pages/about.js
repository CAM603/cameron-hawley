// Styles
import styled from "@emotion/styled";
// Components
import Layout from "../components/layout/layout";
import { Box } from "reflexbox";

export default function About() {
    return (
        <Layout>
            <AboutStyled>
                <h1>About</h1>
                <Box
                    as="h2"
                    variant="title"
                    fontSize={{ _: "1.6rem", md: "2.2rem" }}
                >
                    Overview
                </Box>
                <p>
                    I'm Cameron Hawley, a Full Stack Web Developer and recent
                    graduate of Lambda School. In 2016 I graduated from the
                    University of New Hampshire with a Bachelors of Arts degree
                    in Psychology. Prior to and after that, I spent several
                    years in various customer service and sales positions. In
                    early 2019 I sought out a major career change, looking for
                    something that would allow me to utilize my creativity, love
                    for learning, problem solving, and that aligned with my
                    growth mindset.
                </p>
                <br />
                <p>
                    When I discovered coding and decided to teach myself
                    JavaScript, I knew I had found exactly what I was looking
                    for. It allowed me to be creative, artistic, think
                    critically, problem solve and most importantly provides a
                    continuous pipeline of education. Seeing my progression in
                    such a short amount of time gave me the inspiration and
                    confidence to apply to Lambda School. I was accepted to
                    their Full Stack Web Development and Computer Science
                    curriculum and after the first couple months, I knew without
                    a doubt that I had found my niche in the world.
                </p>
                <br />
                <Box
                    as="h2"
                    variant="title"
                    fontSize={{ _: "1.6rem", md: "2.2rem" }}
                >
                    Present Day
                </Box>
                <p>
                    Fast forward to now, I am fully endorsed by Lambda School
                    and currently working as a Team Lead for students in the
                    Computer Science section of the curriculum while I look for
                    my first big role in a company as a Full Stack Web
                    Developer. Not only did Lambda School teach me how to write
                    concise, resusable and professional code, I also learned how
                    to work in a fast paced, agile environment and how to work
                    cross-functionally with other Web Developers, UX/UI
                    designers, and Data Scientisits.
                </p>
                <br />
                <Box
                    as="h2"
                    variant="title"
                    fontSize={{ _: "1.6rem", md: "2.2rem" }}
                >
                    Title
                </Box>
                <p>
                    I am a thoughful, self driven, and dedicated team player who
                    gives my all to everything I do. I enjoy working working
                    with a team and also thrive when given individual
                    assignments to complete on my own. I am passionate about
                    developing and designing web applications, consistantly
                    iterating over previous releases as I learn and become a
                    better developer. I am always thinking about how I can
                    improve. I have strong communication skills, am detail
                    oriented and have a positive attitude making me easy to work
                    with.
                </p>
                <br />
                <Box
                    as="h2"
                    variant="title"
                    fontSize={{ _: "1.6rem", md: "2.2rem" }}
                >
                    Lambda School
                </Box>
                <p>
                    What I learned at Lambda Lambda School not only covers the
                    fundamentals of computer science and web development, it
                    gave me the opportunity to apply my theoretical knowledge. I
                    learned by building real products and graduated with 1200
                    hours of coding experience, not including the countless
                    hours I spent coding before and after hours.
                </p>
                <div className="lambda">
                    <h3>Web Foundations</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>UI principles</li>
                        <li>GitHub</li>
                    </ul>
                    <h3>Web Application Development</h3>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React Router</li>
                        <li>HTTP/AJAX</li>
                        <li>Functional programming techniques</li>
                    </ul>
                    <h3>Advanced Web Development</h3>
                    <ul>
                        <li>Advanced React</li>
                        <li>Advanced state management</li>
                        <li>Testing</li>
                    </ul>
                    <h3>Back End Development</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Web APIs</li>
                        <li>Data persistence</li>
                        <li>Authentication</li>
                        <li>Testing</li>
                    </ul>
                    <h3>Computer Science</h3>
                    <ul>
                        <li>Python</li>
                        <li>Object oriented programming</li>
                        <li>Algorithms</li>
                        <li>Data Structures</li>
                        <li>Hash tables</li>
                        <li>Graphs</li>
                        <li>Computer Architecture</li>
                    </ul>
                    <h3>Labs</h3>
                    <ul>
                        <li>Apprenticeship</li>
                        <li>Build a real world application</li>
                        <li>Work on a cross-functional team</li>
                        <li>DevOps</li>
                    </ul>
                </div>
            </AboutStyled>
        </Layout>
    );
}

const AboutStyled = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 3rem;
        padding: 20px 0;
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary};
    }

    p {
        font-size: 1.2rem;
        padding: 20px 0;
        max-width: 1000px;
        line-height: 1.5;
    }

    .lambda {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3 {
            font-size: 1.4rem;
            margin-top: 20px;
            margin-bottom: 10px;
        }

        ul {
            margin-left: 20px;
            list-style-type: disc;
            list-style-position: inside;

            li {
                line-height: 1.5;
            }
        }
    }
`;
