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
                    I'm Cameron Hawley, a Full Stack Web Developer, Team Lead,
                    and recent graduate of Lambda School. In 2016 I graduated
                    from the University of New Hampshire with a Bachelor of Arts
                    degree in Psychology. Prior to and after that, I spent
                    several years in various customer service and sales
                    positions. In early 2019 I sought out a major career change,
                    looking for something that would allow me to utilize my
                    creativity, love for learning, problem-solving, and that
                    aligned with my growth mindset.
                </p>
                <p>
                    When I discovered coding and decided to teach myself basic
                    JavaScript, HTML, and CSS, I knew I had found exactly what I
                    was looking for. I heard about Lambda School, an intensive
                    7+ month accelerated program with an immersive (full-time,
                    40+ hours/week) hands-on curriculum with a focus on computer
                    science, software engineering, and web development. I
                    applied, took their precourse screening material, and was
                    accepted. After the first couple of months, I knew without a
                    doubt that I found my niche in the world. Coding allows me
                    to be creative, artistic, think critically, problem-solve,
                    and most importantly provides me with a continuous pipeline
                    of education and learning. Now I am solving difficult code
                    challenges, building full-stack websites, and learning every
                    day. I am looking forward to joining a company with diverse
                    forward thinkers who share my passions and work ethic.{" "}
                    <a href="mailto:cameronhawley@comcast.net">Contact me</a>.
                </p>
                <Box
                    as="h2"
                    variant="title"
                    fontSize={{ _: "1.6rem", md: "2.2rem" }}
                >
                    Who am I?
                </Box>
                <p>
                    I am a thoughtful, self-driven, and dedicated team player
                    who gives my all to everything I do. I enjoy working with a
                    team and also thrive when given individual assignments to
                    complete on my own. I am passionate about developing and
                    designing beautiful and fully responsive web applications.
                    None of my projects are considered done, I am constantly
                    thinking of improvements while iterating over previous
                    releases as I learn and become a better developer.
                    Progression drives me and gives me confidence. I have strong
                    communication skills, am detail-oriented, and have a
                    positive attitude making me easy to work with. When not at
                    my computer, you can either find me on a long walk with my
                    Labradoodle Cooper or on an equally long drive in my 1995
                    Mazda Miata.
                </p>
                <Box
                    as="h2"
                    variant="title"
                    fontSize={{ _: "1.6rem", md: "2.2rem" }}
                >
                    What now?
                </Box>
                <p>
                    Fast forward to now, I am fully endorsed by Lambda School
                    and currently seeking my first big role in a company as a
                    Full Stack Web Developer. In the meantime, I work full time
                    as a Team Lead for students in the Computer Science section
                    of the curriculum. I am responsible for mentoring 9 students
                    through the curriculum, delivering 1 on 1 feedback, and
                    hosting daily stand up meetings. Twice a week I host "Before
                    Hours" for any students seeking help.
                </p>
                <Box
                    as="h2"
                    variant="title"
                    fontSize={{ _: "1.6rem", md: "2.2rem" }}
                >
                    Why Lambda School?
                </Box>
                <p>
                    What I learned at Lambda School not only covers the
                    fundamentals of computer science and web development, it
                    gave me the opportunity to apply my theoretical knowledge.
                    Not only did Lambda School teach me how to write concise,
                    reusable, and professional code, I also learned how to work
                    in a fast-paced, agile environment and how to work
                    cross-functionally with other Web Developers, UX/UI
                    designers, and Data Scientists. I learned by building real
                    products and graduated with 1200 hours of coding experience,
                    not including the countless hours I spent coding before and
                    after hours. Check out my{" "}
                    <a href="https://github.com/CAM603" target="_blank">
                        GitHub
                    </a>{" "}
                    contributions. Below is a brief overview of what I learned
                    while at{" "}
                    <a
                        href="https://lambdaschool.com/courses/full-stack-web-development"
                        target="_blank"
                    >
                        Lambda School
                    </a>
                    .
                </p>
                <div className="lambda">
                    <h3>Unit 1: Web Foundations</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>UI principles</li>
                        <li>GitHub</li>
                    </ul>
                    <h3>Unit 2: Web Application Development</h3>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React Router</li>
                        <li>HTTP/AJAX</li>
                        <li>Functional programming techniques</li>
                    </ul>
                    <h3>Unit 3: Advanced Web Development</h3>
                    <ul>
                        <li>Advanced React</li>
                        <li>Advanced state management</li>
                        <li>Testing</li>
                    </ul>
                    <h3>Unit 4: Back End Development</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Web APIs</li>
                        <li>Data persistence</li>
                        <li>Authentication</li>
                        <li>Testing</li>
                    </ul>
                    <h3>Unit 5: Computer Science</h3>
                    <ul>
                        <li>Python</li>
                        <li>Object oriented programming</li>
                        <li>Algorithms</li>
                        <li>Data Structures</li>
                        <li>Hash tables</li>
                        <li>Graphs</li>
                        <li>Computer Architecture</li>
                    </ul>
                    <h3>Unit 6: Labs</h3>
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
        padding-top: 20px;
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary};
    }

    p {
        font-size: 1.2rem;
        padding: 20px 0;
        line-height: 1.5;
    }

    a {
        font-weight: bold;
        color: ${(props) => props.theme.colors.accent};
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
            font-weight: bold;
            ${(props) => props.theme.colors.primary}
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
