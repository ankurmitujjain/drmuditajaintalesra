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
    heroAlt: z.string().optional(),
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
    reviewedDate: z.string().optional(),
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
    reviewedDate: z.string().optional(),
  }),
});

const offerings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/offerings' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    audience: z.enum(['patient', 'student', 'institution']),
    type: z.enum(['consult', 'second-opinion', 'program', 'workshop', 'guide', 'course', 'corporate']),
    summary: z.string(),
    description: z.string().optional(),
    includes: z.array(z.string()).default([]),
    duration: z.string().optional(),
    format: z.enum(['online-video', 'whatsapp', 'live-group', 'recorded', 'in-person']),
    orderCode: z.string(),
    payment: z.enum(['whatsapp-upi', 'free']).default('whatsapp-upi'),
    bookingUrl: z.string().optional(),
    playlistIds: z.array(z.string()).default([]),
    nextDate: z.string().optional(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).default([]),
    draft: z.boolean().default(true),
    reviewed: z.boolean().default(false),
  }),
});

export const collections = {
  services,
  blog,
  offerings,
};
