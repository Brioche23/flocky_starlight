import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Flocky Report",
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      components: {
        // Override the default `SocialIcons` component.
        Footer: "./src/components/ConditionalFooter.astro",
        Bubble: "./src/components/Bubble.astro",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      customCss: ["./src/tailwind.css"],
      social: {},
      sidebar: [
        {
          label: "Chapters",
          autogenerate: { directory: "guides" },
        },
        {
          label: "References",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
