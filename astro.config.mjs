// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://whatsbot.codika.io',
	integrations: [sitemap()],
	i18n: {
		locales: ['en', 'fr', 'nl', 'es', 'it', 'de'],
		defaultLocale: 'en',
	},
});
