import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    work: defineCollection({
      type: 'page',
      source: 'work/*.md',
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        type: z.string(),
        startingPoint: z.string().optional(),
        outcome: z.string().optional(),
        techStack: z.array(z.string()).optional(),
        credits: z.array(z.string()).optional(),
        websiteLink: z.string().optional(),
        websiteUrl: z.string().optional()
      })
    })
  }
})
