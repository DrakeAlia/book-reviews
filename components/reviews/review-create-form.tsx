"use client";

import * as actions from "@/app/actions";
import FormButton from "@/common/form-button";
import { useFormState } from "react-dom";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import StarRating from "../ui/star-rating";

interface ReviewCreateFormProps {
  bookId: string;
}

export default function ReviewCreateForm({ bookId }: ReviewCreateFormProps) {
  const [formState, action] = useFormState(actions.createReview, {
    errors: {},
  });

  const [rating, setRating] = useState(0);

  console.log("bookId from prop:", bookId);

  // <div>{bookId ? <ReviewCreateForm /> : <div>No book ID found</div>}</div>;

  return (
    <form action={action}>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="rating">Rating</Label>
          <StarRating rating={rating} onRatingChange={setRating} />
          <span className="text-red-500">
            {formState.errors.rating?.join(", ")}
          </span>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Review</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Write your review here"
          />
          <span className="text-red-500">
            {formState.errors.description?.join(", ")}
          </span>
        </div>
        <span className="text-red-500">
          {formState.errors._form?.join(", ")}
        </span>
      </div>
      <input type="hidden" name="rating" value={rating} />
      <input type="hidden" name="bookId" value={bookId ?? ""} />
      <div className="flex justify-between space-x-4 mt-4">
        <FormButton>Create Review</FormButton>
        {bookId && (
          <Link
            href={`/bookshelf/books/${bookId}`}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Back to Book
          </Link>
        )}
        <Link
          href="/bookshelf"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Back to Bookshelf
        </Link>
      </div>
    </form>
  );
}
