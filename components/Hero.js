// Styles
import styled from "@emotion/styled";

export default function Hero() {
    return (
        <HeroStyled>
            <div className="image">
                <p>My Picture</p>
            </div>
            <div className="intro">
                <h1>
                    Hello! My name is Cameron Hawley. I'm a full stack web
                    developer
                </h1>
                <p>
                    Something something about me. I am Cam. I do coding and I
                    love it. I would love to work with and or for you!
                </p>
                <button>Contact me</button>
            </div>
        </HeroStyled>
    );
}

const HeroStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    .intro {
        max-width: 500px;

        h1 {
            font-size: 2.6rem;
            margin-bottom: 1.2rem;
        }

        p {
            font-size: 1.2rem;
            line-height: 1.5;
        }
        button {
            margin-top: 20px;
        }
    }
`;
