import type { BookList } from "@prisma/client";
import { db } from "@/db";

export async function getBookList(): Promise<BookList[]> {
  return db.bookList.findMany();
}