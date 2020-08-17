import styled from "@emotion/styled";

const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
`;

const icons = [
    { icon: <ImageStyled src="/images/icons/html.png" alt="html5" />, id: 1 },
    { icon: <ImageStyled src="/images/icons/css.png" alt="css" />, id: 2 },
    {
        icon: (
            <ImageStyled src="/images/icons/javascript.png" alt="javascript" />
        ),
        id: 3,
    },
    {
        icon: <ImageStyled src="/images/icons/python.png" alt="python" />,
        id: 4,
    },
    { icon: <ImageStyled src="/images/icons/react.png" alt="react" />, id: 5 },
    { icon: <ImageStyled src="/images/icons/node.png" alt="node" />, id: 6 },
    {
        icon: <ImageStyled src="/images/icons/postgres.png" alt="postgres" />,
        id: 7,
    },
];

const socials = [
    {
        icon: <ImageStyled src="/images/icons/email.png" alt="email" />,
        name: "Email",
        link: "mailto:cameronhawley@comcast.net",
        id: 1,
    },
    {
        icon: <ImageStyled src="/images/icons/github.png" alt="github" />,
        link: "https://github.com/CAM603",
        name: "GitHub",
        id: 2,
    },
    {
        icon: <ImageStyled src="/images/icons/linkedin.png" alt="linkedin" />,
        link: "https://www.linkedin.com/in/cameron-hawley/",
        name: "LinkedIn",
        id: 3,
    },
];

export { icons, socials };
