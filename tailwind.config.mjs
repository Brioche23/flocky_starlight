import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";
const defaultTheme = require("tailwindcss/defaultTheme");

// Generated color palettes
const accent = {
  200: "#f5b6b2",
  600: "#ca0026",
  900: "#5e1014",
  950: "#411112",
};
const gray = {
  100: "#f6f6f3",
  200: "#eeeee8",
  300: "#c2c3bb",
  400: "#8c8d7e",
  500: "#59594c",
  700: "#39392d",
  800: "#27281c",
  900: "#181913",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray,
      },
      fontFamily: {
        sans: ["GT Maru", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [starlightPlugin()],
};
