import { defineCollection, z } from 'astro:content';

const trips = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    heroImage: z.string().optional(),
    routeId: z.string().optional(),
    origin: z.string(),
    destination: z.string(),
    estimatedDriveTime: z.string().optional(),
    distanceMiles: z.number().optional(),
    stops: z.array(z.object({
      name: z.string(),
      location: z.string().optional(),
    })).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { trips };
