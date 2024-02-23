import type {Config} from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],


  plugins: [
    plugin(function ({addComponents, addBase, theme}) {
      addComponents({
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
        },
        ".btn-blue": {
          backgroundColor: "#3490dc",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2779bd",
          },
        },
        ".btn-red": {
          backgroundColor: "#e3342f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a",
          },
        },
      });

      addBase({
        'h1': {fontSize: theme('fontSize.2xl')},
        'h2': {fontSize: theme('fontSize.xl')},
        'h3': {fontSize: theme('fontSize.lg')},
      })
    }),
  ],
};
export default config;
