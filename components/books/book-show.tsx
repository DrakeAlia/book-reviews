import { db } from "@/db";
import { notFound } from "next/navigation";

import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ReviewList from "../reviews/review-list";
// import ReviewShow from "../reviews/review-show";

interface BookShowProps {
  bookId: string;
}

// The BookShow component fetches a book by its ID and displays its details
export default async function BookShow({ bookId }: BookShowProps) {
  console.log("Book ID ✅:", bookId);

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
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary font-bold">{book.title}</span>
          </h1>
          <p className="text-xl mb-1 font-semibold">
            Author:
            <span className="text-primary font-bold"> {book.author}</span>
          </p>
          <p className="text-md mb-3 font-medium ">
            Genre:
            <span className="text-primary font-bold"> {book.genre}</span>
          </p>
        </div>
        {/* <div>
          <ReviewShow bookId={bookId} />
        </div> */}
        <div>
          <ReviewList  />
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <Link
          href={`/bookshelf/books/${bookId}/review`}
          className={cn(buttonVariants())}
        >
          Review book
        </Link>
        <Link
          href="/bookshelf"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Back to bookshelf
        </Link>
      </div>
    </div>
  );
}
