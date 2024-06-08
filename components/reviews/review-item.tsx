"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import StarRating from "../ui/star-rating";

interface ReviewItemProps {
  review: {
    id: string;
    rating: number;
    description: string;
    user: {
      image: string | null;
      name: string | null;
    };
  };
}

export default function ReviewItem({ review }: ReviewItemProps) {
  return (
    <Card
      key={review.id}
      className="review-card border border-gray-200 shadow-md p-4 hover:shadow-lg transition duration-300"
    >
      <CardHeader className="review-card-header">
        <div className="flex items-center justify-between">
          <CardTitle className="review-rating flex items-center">
            <StarRating rating={review.rating} readonly onRatingChange={function (rating: number): void {
              throw new Error("Function not implemented.");
            } } />
            <span className="text-lg font-medium ml-2">{review.rating}/5</span>
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
}
