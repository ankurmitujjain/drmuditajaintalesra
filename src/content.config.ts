import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    h1: z.string(),
    directAnswer: z.string(),
    keywords: z.array(z.string()).default([]),
    heroImage: z.string().default('/images/clinic-exterior.webp'),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).default([]),
    relatedServices: z.array(z.string()).default([]),
    youtubeId: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
    reviewed: z.boolean().default(true),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    serviceSlug: z.string().optional(),
    directAnswer: z.string(),
    image: z.string().default('/images/clinic-exterior.webp'),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).default([]),
    youtubeId: z.string().optional(),
    draft: z.boolean().default(false),
    reviewed: z.boolean().default(true),
  }),
});

export const collections = {
  services,
  blog,
};
