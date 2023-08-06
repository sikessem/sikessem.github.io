import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/favicon.ico',
			logo: {
				src: './src/assets//logo.svg',
				alt: 'Sikessem',
				replacesTitle: true,
			},
			title: 'Sikessem',
			social: {
				github: 'https://github.com/sikessem',
				twitter: 'https://twitter.com/@sikessem_tweets',
			},
			sidebar: [
				{
					label: 'Projects',
					items: [
						{ label: 'Getting started', link: '/projects/' },
						{ label: 'Starter kit', link: '/projects/starter' },
						{ label: 'Package skeleton', link: '/projects/skeleton' },
					],
				},
				{
					label: 'Packages',
					autogenerate: { directory: 'packages' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
