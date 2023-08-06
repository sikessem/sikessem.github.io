import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    favicon: '/favicon.ico',
    logo: {
      src: './src/assets//logo.svg',
      alt: 'Sikessem',
      replacesTitle: true
    },
    title: 'Sikessem',
    social: {
      github: 'https://github.com/sikessem',
      twitter: 'https://twitter.com/@sikessem_tweets'
    },
    locales: {
      root: {
        label: 'English',
        lang: 'en'
      },
      fr: {
        label: 'Français'
      }
    },
    sidebar: [{
      label: 'Projects',
      autogenerate: {
        directory: 'projects'
      }
    }, {
      label: 'Packages',
      autogenerate: {
        directory: 'packages'
      }
    }]
  }),
  tailwind({
    configFile: './tailwind.config.ts',
    applyBaseStyles: false,
  })],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});