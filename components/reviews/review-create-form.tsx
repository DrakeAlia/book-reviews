"use client";

import * as actions from "@/app/actions";
import FormButton from "@/common/form-button";
import { useFormState } from "react-dom";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ReviewCreateForm() {
  const [formState, action] = useFormState(actions.createReview, {
    errors: {},
  });

  return (
    <form action={action}>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="rating">Rating</Label>
          <input
            id="rating"
            name="rating"
            type="number"
            min="1"
            max="5"
            placeholder="Rate this book out of 5."
          />
          <span className="text-red-500">
            {formState.errors.rating?.join(", ")}
          </span>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Review</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Write your review here."
          />
          <span className="text-red-500">
            {formState.errors.description?.join(", ")}
          </span>
        </div>
        <div className="text-red-500">{formState.errors._form?.join(", ")}</div>
      </div>
      <FormButton>Create Review</FormButton>
    </form>
  );
}
