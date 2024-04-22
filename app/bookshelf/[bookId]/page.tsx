// app/bookshelf/[bookId].tsx
import { db } from "@/db";
import { notFound } from "next/navigation";
import { Book } from "@prisma/client";

interface BookDetailPageProps {
  params: {
    bookId: string;
  };
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const book = await db.book.findUnique({
    where: { id: params.bookId },
  });

  if (!book) {
    return notFound();
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>{book.genre}</p>
    </div>
  );
}