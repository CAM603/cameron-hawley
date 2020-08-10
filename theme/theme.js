const breakpoints = ["360px", "768px", "1024px", "1280px", "1600px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

export default {
    colors: {
        primary: "#2ECC71",
        accent: "#000000",
    },
    variants: {
        container: {
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: 30,
        },
        title: {
            fontSize: "2.2rem",
            borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
            fontWeight: "bold",
            margin: "20px 0",
            width: "100%",
        },
        card: {
            border: "solid black rgb(234, 234, 234)",
            borderRadius: "14px",
            margin: "20px 0",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 6px",
            padding: "20px",
        },
        icon: {
            width: "66px",
            height: "66px",
            margin: "0 20px",
        },
        iconContact: {
            width: "44px",
            height: "44px",
        },
        project: {
            margin: "20px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    },
    breakpoints,
};
