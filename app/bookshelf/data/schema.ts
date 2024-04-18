import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const bookShelfSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  // year: z.number(),
  // rating: z.number(),
  // status: z.string(),
  // label: z.string(),
  // priority: z.string(),
});

export type Book = z.infer<typeof bookShelfSchema>;
