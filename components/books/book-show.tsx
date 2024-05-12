import { db } from "@/db";
import { notFound } from "next/navigation";

import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BookShowProps {
  bookId: string;
}

// The BookShow component fetches a book by its ID and displays its details
export default async function BookShow({ bookId }: BookShowProps) {
  console.log("Book ID ✅:", bookId);
  try {
    const book = await db.book.findUnique({
      where: { id: bookId },
    });

    console.log("Fetching:", book);

    if (!book) {
      console.error("No book found with ID:", bookId);
      return notFound();
    }

    return (
      <div className="container mx-auto p-6">
        <div className="bg-yellow shadow-lg rounded-lg p-4 lg:p-8">
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-xl mb-1">Author: {book.author}</p>
            <p className="text-md italic mb-3">Genre: {book.genre}</p>
          </div>
        </div>
        <Link
          href={`/bookshelf/books/${bookId}/reviews`}
          className={cn(buttonVariants())}
        >
          Review book
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Error fetching book:", error);
    console.log("Book ID:", bookId);
    return notFound();
  }
}
