import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                primary: colors.sky,
                neutral: colors.slate,
                success: colors.lime,
                warning: colors.amber,
                danger: colors.red,
                info: colors.sky,
            },
        },
    },
    plugins: [],
};
