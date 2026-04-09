import { z } from 'zod';

export const CatSchema = z.object({
  id: z.string(),
  url: z.url(),
  width: z.number(),
  height: z.number(),
});

export const CatsResponseSchema = z.array(CatSchema);

export type Cat = z.infer<typeof CatSchema>;
export type CatsResponse = z.infer<typeof CatsResponseSchema>;
