/** @type {import('tailwindcss').Config} */
export default {
    // This content array is the key fix
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}", // <-- Make sure this line exists
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}