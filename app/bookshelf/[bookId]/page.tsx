// app/bookshelf/[bookId].tsx
import { db } from "@/db";
import { notFound } from "next/navigation";
import { Book } from "@prisma/client";

interface BookDetailPageProps {
  book: Book;
}

export default async function BookDetailPage({ book }: BookDetailPageProps) {
  if (!book) {
    return notFound();
  }

  return (
    <>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
    </>
  );
}
