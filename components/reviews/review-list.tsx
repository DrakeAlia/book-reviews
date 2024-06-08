import { db } from "@/db";
import ReviewItem from "./review-item";
import { Suspense } from "react";

interface ReviewListProps {
  bookId: string;
}

export default async function ReviewList({ bookId }: ReviewListProps) {
  const reviews = await db.review.findMany({
    where: {
      bookId: bookId,
    },
    include: {
      user: true,
    },
  });

  console.log("Reviews for book:", bookId, reviews);

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Suspense key={review.id} fallback={<div>Loading review...</div>}>
          <ReviewItem review={review} />
        </Suspense>
      ))}
    </div>
  );
}
