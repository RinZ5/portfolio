import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // image: z.string().optional(),
    image: z.string(),
    tags: z.array(z.string()),
    link: z.string().url().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

export const collections = { projects };
