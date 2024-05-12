import { db } from "@/db";
import { notFound } from "next/navigation";

import * as React from "react";

interface ReviewShowProps {
  reviewId: string;
}

// The ReviewShow component fetches a review by its ID and displays its details
export default async function ReviewShow({ reviewId }: ReviewShowProps) {
  console.log("Review ID ✅:", reviewId);
  try {
    const review = await db.review.findUnique({
      where: { id: reviewId },
    });

    console.log("Fetching:", review);

    if (!review) {
      console.error("No review found with ID:", reviewId);
      return notFound();
    }

    return (
      <div className="container mx-auto p-6">
        <div className="bg-yellow shadow-lg rounded-lg p-4 lg:p-8">
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <h1 className="text-3xl font-bold mb-2">{review.description}</h1>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching review:", error);
    return notFound();
  }
}
