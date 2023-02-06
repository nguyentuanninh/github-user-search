/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primaryLight: "#B9F3FC",
                secondaryLight: "#AEE2FF",
                tertiaryLight: "#0081B4",
                quaternaryLight: "#FEDEFF",

                primaryDark: "#000000",
                secondaryDark: "#282A3A",
                tertiaryDark: "#735F32",
                quaternaryDark: "#C69749",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};
