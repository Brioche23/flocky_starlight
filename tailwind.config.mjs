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
  100: "#F7F8E8",
  200: "#eeeeee",
  300: "#c2c2c2",
  400: "#8d8d8d",
  500: "#595959",
  700: "#393939",
  800: "#272727",
  900: "#181818",
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
        cream: "#F7F8E8",
        flockyred: "#CE2834",
      },
      fontFamily: {
        sans: ["GT Maru", "Inter", ...defaultTheme.fontFamily.sans],
        emoji: ["GT Maru Emoji", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [starlightPlugin()],
};
