import { db } from "@/db";
import { notFound } from "next/navigation";

interface BookShowProps {
  bookId: string;
}

// The BookShow component fetches a book by its ID and displays its details
export default async function BookShow({ bookId }: BookShowProps) {
  console.log("Book ID ✅:", bookId);
  try {
    const book = await db.review.findUnique({
      where: { id: bookId },
    });

    console.log("Fetching:", book);

    if (!book) {
      console.error("No book found with ID:", bookId);
      return notFound();
    }

    return (
      <div>
        {book && (
          <>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Description: {book.description}</p>
          </>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching book:", error);
    return notFound();
  }
}
