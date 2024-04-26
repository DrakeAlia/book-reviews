import { db } from "@/db";
import { notFound } from "next/navigation";

interface BookShowProps {
  bookId: string;
}

export default async function BookShow({ bookId }: BookShowProps) {
  try {
  const book = await db.book.findUnique({
    where: { id: bookId },
  });

  console.log("Fetching book with ID:", bookId);

    if (!book) {
      console.error("No book found with ID:", bookId);
      return notFound();
    }

    console.log("Book details:", book);
    console.log("Book title:", book.title);
    console.log("Book author:", book.author);
    console.log("Book genre:", book.genre);
    console.log("Book description:", book.description);

    return (
      <div className="m-4 pt-4">
        <h1 className="text-2xl font-bold my-2">
          {book.title} by {book.author}
        </h1>
        <p className="text-lg text-gray-500 my-2">{book.genre}</p>
        <p className="p-4 border rounded-md">{book.description}</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching book:", error);
    return notFound();
  }
}
