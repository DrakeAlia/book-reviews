import { db } from "@/db";
import { notFound } from "next/navigation";

import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ReviewShowLoading from "@/components/reviews/review-show-loading";
import { Suspense } from "react";
import Link from "next/link";
import ReviewList from "../reviews/review-list";

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
      <div className="rounded-lg p-4">
        <div className="mt-4 lg:mt-0 lg:ml-4">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary font-bold">{book.title}</span>
          </h1>
          <p className="text-xl mb-1 font-semibold">
            Author:
            <span className="text-primary font-bold"> {book.author}</span>
          </p>
          <p className="text-md mb-3 font-bold ">
            Genre:
            <span className="text-primary font-bold"> {book.genre}</span>
          </p>
          <p className="text-md mb-3 font-bold ">
            Description:
            <span className="text-primary font-bold"> {book.description}</span>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-8 underline mb-8">
            Reviews:
          </h2>
          <Suspense fallback={<ReviewShowLoading />}>
            <ReviewList bookId={bookId} />
          </Suspense>
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
