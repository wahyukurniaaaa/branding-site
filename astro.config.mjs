// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import mdx from '@astrojs/mdx';
import playformCompress from "@playform/compress";
// import vercel from "@astrojs/vercel/serverless"; // Disabled for static build

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ['*'],
        'simple-icons': ['*'],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,
      },
    })
  ],
  output: 'static',  // Static HTML files untuk VPS
  // adapter: vercel(), // Tidak perlu adapter untuk static

});
