import styled from "@emotion/styled";

const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
`;

const icons = [
    { image: <ImageStyled src="/images/html.png" alt="html5" />, id: 1 },
    { image: <ImageStyled src="/images/css.png" alt="css" />, id: 2 },
    {
        image: <ImageStyled src="/images/javascript.png" alt="javascript" />,
        id: 3,
    },
    { image: <ImageStyled src="/images/python.png" alt="python" />, id: 4 },
    { image: <ImageStyled src="/images/react.png" alt="react" />, id: 5 },
    { image: <ImageStyled src="/images/node.png" alt="node" />, id: 6 },
];

export default icons;
