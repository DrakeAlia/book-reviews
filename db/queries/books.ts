// queries/books.ts

import type { Book, Review } from "@prisma/client";
import { db } from "@/db";

export type BookWithData = Book & {
  review: Review | null;
  user: { name: string | null };
};

export function fetchBookById(bookId: string) {
  return db.book.findUnique({
    where: { id: bookId },
    include: { review: true, user: { select: { name: true } } },
  });
}
