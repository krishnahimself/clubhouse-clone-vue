/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    100: '#14171a',
                    200: '#657786',
                    300: '#aab8c2',
                    400: '#e1e8ed',
                    500: '#f5f8fa',
                },
                brand: {
                    100: '#1da1f2',
                },
            },
        },
    },
    plugins: [],
}
