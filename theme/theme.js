const breakpoints = ["360px", "768px", "1024px", "1280px", "1600px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

export default {
    colors: {
        primary: "#222831",
        secondary: "#393e46",
        accent: "#00adb5",
        light: "#eeeeee",
    },
    variants: {
        container: {
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            marginBottom: "20px",
        },
        title: {
            borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
            fontWeight: "bold",
            margin: "20px 0",
            width: "100%",
            color: "#222831",
        },
        card: {
            border: "solid black rgb(234, 234, 234)",
            borderRadius: "14px",
            margin: "20px 2px",
            boxShadow:
                "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)",
            padding: "20px",
            backgroundColor: "#ffffff",
            width: "100%",
        },
        icon: {
            width: "66px",
            height: "66px",
            margin: "20px",
        },
        iconContact: {
            width: "44px",
            height: "44px",
        },
        project: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
        },
    },
    breakpoints,
};
