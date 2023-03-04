const breakpoints = ["360px", "768px", "1024px", "1280px", "1600px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

export default {
    light: {
        primary: "#222831",
        secondary: "#393e46",
        accent: "#00adb5",
        light: "#eeeeee",
        text: "#222831",
        background: "#eeeeee",
        image: "none",
        hover: "rgba(8, 172, 181, 0.9)",
        shadow: "0 6px 20px rgba(8, 172, 181, 0.23)"
    },
    dark: {
        primary: "#212121",
        secondary: "#323232",
        accent: "#14FFEC",
        light: "#eeeeee",
        text: "#eeeeee",
        background: "#323232",
        image: "invert(1)",
        hover: "rgba(20, 255, 236, 0.9)",
        shadow: "0 6px 20px rgba(20, 255, 236, 0.23)"
    },
    variants: {
        container: {
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            marginBottom: "20px"
        },
        title: {
            fontWeight: "bold",
            margin: "20px 0",
            width: "100%"
        },
        card: {
            border: "solid black rgb(234, 234, 234)",
            borderRadius: "14px",
            margin: "20px 2px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)",
            padding: "20px",
            width: "100%"
        },
        icon: {
            width: "66px",
            height: "66px",
            margin: "20px"
        },
        iconContact: {
            width: "44px",
            height: "44px"
        },
        project: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
        }
    },
    breakpoints
};
