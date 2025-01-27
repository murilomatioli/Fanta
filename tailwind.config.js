/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": {transform: "translateX(50px)", opacity: "0"},
          "100%": {transform: "translateX(0px)", opacity: "1"}
        },
        shake: {
          "0%": {transform: "rotate(0deg)"},
          "33%": {transform: "rotate(10deg)"},
          "66%": {transform: "rotate(-5deg)"},
          "100%": {transform: "rotate(0deg)"}
        }
      },
      animation: {
        "slide-left": "slideLeft 0.1s linear",
        "shake": "shake 0.5s linear"
      }
    },
  },
  plugins: [],
}

