import { db } from "@/db";
import { notFound } from "next/navigation";

import * as React from "react";

interface ReviewShowProps {
  bookId: string;
}

// The ReviewShow component fetches a review by its ID and displays its details
export default async function ReviewShow({ bookId }: ReviewShowProps) {
  console.log("Book ID ✅:", bookId);

    const review = await db.review.findFirst({
      where: { id: bookId },
    });

    console.log("Fetching:", review);

    if (!review) {
      console.error("No review found with ID:", bookId);
      return notFound();
    }

    return (
      <div className="container mx-auto p-6">
        <div className="bg-yellow shadow-lg rounded-lg p-4 lg:p-8">
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <h1 className="text-3xl font-bold mb-2">{review.description}</h1>
            <p className="text-xl mb-1">Rating: {review.rating}</p>
            <p className="text-md italic mb-3">Book ID: {review.bookId}</p>
          </div>
        </div>
      </div>
    );
}
