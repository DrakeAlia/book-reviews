import { db } from "@/db";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Link from "next/link";
import BookShowLoading from "@/components/books/book-show";
import BookShow from "@/components/books/book-show";

interface BookShowPageProps {
  params: {
    bookId: string;
  };
}

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  review: Review[];
}

interface Review {
  id: string;
  description: string;
  // Add other properties of the review
}

export default async function BookShowPage({ params }: BookShowPageProps) {
  console.log("Book ID:", params.bookId);

  try {
    const book = await db.book.findUnique({
      where: { id: params.bookId },
      include: {
        review: true,
      },
    });

    console.log("Book:", book);

    if (!book) {
      console.log(`No book found with ID ${params.bookId}`);
      return notFound();
    }

    console.log("Book reviews:", book.review);

    return (
      <div>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Description: {book.description}</p>

        <h2>Reviews:</h2>
        <Suspense fallback={<BookShowLoading bookId={""} />}>
          <BookShow bookId={params.bookId} />
        </Suspense>

      </div>
    );
  } catch (error) {
    console.error("Failed to fetch book:", error);
    throw error; 
  }
}
