import { z } from 'zod';

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const LIMIT = 15;

export const CatSchema = z.object({
  id: z.string(),
  url: z.url(),
  width: z.number(),
  height: z.number(),
});

export const CatsResponseSchema = z.array(CatSchema);

export type Cat = z.infer<typeof CatSchema>;
export type CatsResponse = z.infer<typeof CatsResponseSchema>;

export function fetchCats(page: number): Promise<CatsResponse> {
  return fetch(`${BASE_URL}?limit=${LIMIT}&page=${page}`, {
    headers: {
      'x-api-key': import.meta.env.VITE_CAT_API_KEY,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch cats');
      }
      return res.json();
    })
    .then((data) => CatsResponseSchema.parse(data));
}
