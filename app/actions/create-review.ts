"use server";

import type { Review } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

// Schema should now also validate bookId
const createReviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  description: z
    .string()
    .min(5, "Review must be at least 10 characters.")
    .max(1000, "Review must not be longer than 1000 characters."),
  bookId: z.string(), // Assuming bookId is a string ID
});

interface CreateReviewFormState {
  errors: {
    description?: string[];
    rating?: string[];
    bookId?: string[];
    _form?: string[];
  };
}

export async function createReview(
  formState: CreateReviewFormState,
  formData: FormData
): Promise<CreateReviewFormState> {
  const result = createReviewSchema.safeParse({
    description: formData.get("description"),
    rating: Number(formData.get("rating")),
    bookId: formData.get("bookId"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return {
      errors: { _form: ["You must be signed in to create a review."] },
    };
  }

  let review: Review;
  try {
    review = await db.review.create({
      data: {
        description: result.data.description,
        rating: result.data.rating,
        bookId: result.data.bookId,
        userId: session.user.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { errors: { _form: [err.message] } };
    }
    return { errors: { _form: ["Failed to create review."] } };
  }
  console.log("👍🏻 review");
  revalidatePath(paths.home());
  redirect(paths.reviewShow(review.bookId, review.id));
}
