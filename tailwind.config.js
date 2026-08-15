/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          // deep pine-forest near-black rather than a neutral tech navy
          950: "#0a0f0d",
          900: "#121915",
          800: "#1a231c",
        },
        bone: "#ece7da", // parchment/bone off-white, used instead of pure white
        aurora: "#4fd1ae", // aurora-borealis teal-green — primary accent
        fjord: "#5b84b1", // muted fjord-water blue — secondary accent
        gold: "#c9a15a", // aged bronze/rune-gold — tertiary accent
        ember: "#b5533c", // rust/ember — used sparingly for warmth
      },
      fontFamily: {
        display: ["'Fraunces Variable'", "serif"],
        body: ["'Karla Variable'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
