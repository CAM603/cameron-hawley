import styled from "@emotion/styled";

const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
`;

const icons = [
    { icon: <ImageStyled src="/images/html.png" alt="html5" />, id: 1 },
    { icon: <ImageStyled src="/images/css.png" alt="css" />, id: 2 },
    {
        icon: <ImageStyled src="/images/javascript.png" alt="javascript" />,
        id: 3,
    },
    { icon: <ImageStyled src="/images/python.png" alt="python" />, id: 4 },
    { icon: <ImageStyled src="/images/react.png" alt="react" />, id: 5 },
    { icon: <ImageStyled src="/images/node.png" alt="node" />, id: 6 },
];

const socials = [
    { icon: <ImageStyled src="/images/email.png" alt="email" />, id: 1 },
    { icon: <ImageStyled src="/images/github.png" alt="github" />, id: 2 },
    {
        icon: <ImageStyled src="/images/linkedin.png" alt="linkedin" />,
        id: 3,
    },
];

export { icons, socials };
