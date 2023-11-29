module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,css}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            padding: {
                base: "75px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
        require("tailwindcss"),
        require("autoprefixer"),
    ],
};
