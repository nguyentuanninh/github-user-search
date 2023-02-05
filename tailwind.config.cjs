/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [],
    theme: {
        extend: {
            color: {
                primary: "#B9F3FC",
                secondary: "#AEE2FF",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
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
    },
    plugins: [],
};
