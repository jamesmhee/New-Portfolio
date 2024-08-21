import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {                
        "pop-blob": "pop-blob 5s infinite",
      },
      blur: {
        "20": "20px",
        "25": "25px",
      },
      colors: {
        foreground: "hsl(var(--foreground))",
      },
        transitionTimingFunction: {
          slow: "cubic-bezier(.405, 0, .025, 1)",
          "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
