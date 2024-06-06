import { db } from "@/db";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

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
      <Card
        key={review.id}
        className="review-card border border-gray-200 shadow-md p-4  hover:shadow-lg transition duration-300"
      >
        <CardHeader className="review-card-header">
          <div className="flex items-center justify-between">
            <CardTitle className="review-rating flex items-center">
              <svg className="w-4 h-4 text-yellow-500 mr-1 fill-current">
                {/* Star icon */}
              </svg>
              <span className="text-lg font-medium">{review.rating}/5</span>
            </CardTitle>
            <div className="flex items-center space-x-3">
              <Avatar className="review-user-avatar">
                <AvatarImage src={review.user.image || ""} />
                <AvatarFallback>{review.user.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardDescription className="review-user-name text-base font-medium text-white-800">
                {review.user.name}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="review-card-content mt-4">
          <p className="text-sm text-gray-600">{review.description}</p>
        </CardContent>
      </Card>
    );
  });

  console.log("Reviews for book:", bookId, reviews);

  return <div className="space-y-4">{renderedReviews}</div>;
}
