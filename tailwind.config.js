/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                md: "3rem",
                lg: "4rem",
            },
        },
        extend: {},
    },
    plugins: [require("daisyui")],
};
