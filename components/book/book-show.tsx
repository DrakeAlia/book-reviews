import { db } from "@/db";
import { notFound } from "next/navigation";

interface BookShoProps {
  bookId: string;
}

export default async function BookShow({ bookId }: BookShoProps) {
  const book = await db.book.findUnique({
    where: { id: bookId },
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
