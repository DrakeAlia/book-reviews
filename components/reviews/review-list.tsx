import { db } from "@/db";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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

  const renderedReviews = reviews.map((review) => {
    return (
      <Card key={review.id} className="mt-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{review.rating}/5</CardTitle>
            <CardDescription>Reviewed by: {review.user.name}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{review.description}</p>
        </CardContent>
      </Card>
    );
  });

  console.log("Reviews for book:", bookId, reviews);

  return <div className="space-y-4">{renderedReviews}</div>;
}
