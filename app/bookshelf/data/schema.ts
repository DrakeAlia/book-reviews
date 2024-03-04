import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const bookShelfSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
  author: z.string(),

  year: z.number(),
});

export type Book = z.infer<typeof bookShelfSchema>;
