import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Sikessem',
        replacesTitle: true
      },
      title: 'Sikessem',
			editLink: {
				baseUrl: 'https://github.com/sikessem/sikessem.github.io/edit/0.x/src/content/docs/',
			},
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
          translations: {
            fr: 'Projets',
          },
          autogenerate: {
            directory: 'projects'
          }
        }, {
          label: 'Packages',
          autogenerate: {
            directory: 'packages'
          }
        }, {
          label: '🧪 Testing and Debugging',
          translations: {
            fr: 'Test et Débogage',
          },
          link: 'testing',
        }, {
          label: '👥 Contribution Guide',
          translations: {
            fr: '👥 Guide de Contribution',
          },
          link: 'contributions',
        }, {
          label: '🛂 Code of Conduct',
          translations: {
            fr: '🛂 Code de Conduite',
          },
          link: 'code-of-conduct',
        },
      ],
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});