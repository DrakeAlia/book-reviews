import { db } from "@/db";
import { notFound } from "next/navigation";

interface BookShowProps {
  bookId: string;
}

export default async function BookShow({ bookId }: BookShowProps) {
  const book = await db.book.findUnique({
    where: { id: bookId },
  });

  if (!book) {
    return notFound();
  }

  return (
    <div className="m-4 pt-4">
      <h1 className="text-2xl font-bold my-2">
        {book.title} by {book.author}
      </h1>
      <p className="p-4 border rounded-md">{book.description}</p>
    </div>
  );
}
