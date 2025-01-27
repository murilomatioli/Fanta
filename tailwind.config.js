/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": {transform: "translateX(10px)", opacity: "0"},
          "100%": {transform: "translateX(0px)", opacity: "1"}
        },
      },
      animation: {
        "slide-left": "slideLeft 0.5s linear",
      }
    },
  },
  plugins: [],
}

