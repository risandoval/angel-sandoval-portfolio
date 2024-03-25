/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                firaSans: ['Fira Sans', 'sans-serif'],
                radioCanada: ['Radio Canada', 'sans-serif']
            },
            colors: {
                'main': {100: '#131211'},
                'secondary': {100: '#AEAE9D'},
                'brown': {100: '#6A5D48'},
                'dark-brown': {100: '#4A4132'},
                'white': {100: '#D9D9D9'}
            },
            screens: {
                xs : '360px', //mobile
                s : '415px', //mobile
                m : '601px', //tablet
                lg : '1024px', //tablet
                xl : '1280px', //desktop
                xxl : '1920px', //desktop
              }
        },
    },
    plugins: [],
}