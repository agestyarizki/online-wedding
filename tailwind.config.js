/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Open Sans', 'sans-serif'],
                arabic: ['Scheherazade New', 'serif'],
                script: ['"Great Vibes"', 'cursive'],
                photograph: ['Photograph', 'cursive'],
            },
            backgroundImage: {
                'pattern1': "url('/images/bg-pattern1.png')",
            },
        },
    },
    plugins: [],
}
