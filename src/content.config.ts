import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('Codika'),
		tags: z.array(z.string()),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		draft: z.boolean().default(false),
		canonicalUrl: z.string().optional(),
	}),
});

const legal = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lastUpdated: z.coerce.date(),
	}),
});

export const collections = { blog, legal };
