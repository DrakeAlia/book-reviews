"use server";

import type { Review } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

// The createReviewSchema defines the shape of the data required to create a review
const createReviewSchema = z.object({
  rating: z.number().int().min(1, "Must have a rating for this book").max(5),
  description: z
    .string()
    .min(5, "Review must be at least 10 characters before submitting")
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
  // bookId: string
): Promise<CreateReviewFormState> {
  console.log("Form Data:", Object.fromEntries(formData));

  const result = createReviewSchema.safeParse({
    description: formData.get("description"),
    rating: Number(formData.get("rating")),
    bookId: formData.get("bookId"),
  });

  if (!result.success) {
    console.log("Validation Error:", result.error.flatten().fieldErrors);
    return { errors: result.error.flatten().fieldErrors };
  }

  console.log("Parsed Form Data:", result.data);

  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return {
      errors: { _form: ["You must be signed in to create a review."] },
    };
  }
  console.log("Session:", session);

  const book = await db.book.findUnique({
    where: {
      id: result.data.bookId,
    },
  });

  console.log("Found Book:", book);

  if (!book) {
    return { errors: { _form: ["Book not found."] } };
  }

  // Check if a review already exists for this user and book
  const existingReview = await db.review.findUnique({
    where: {
      userId_bookId: {
        userId: session.user.id,
        bookId: result.data.bookId,
      },
    },
  });

  if (existingReview) {
    return {
      errors: { _form: ["You have already reviewed this book."] },
    };
  }

  let review: Review;
  try {
    console.log("Creating review...");
    review = await db.review.create({
      data: {
        description: result.data.description,
        rating: result.data.rating,
        bookId: result.data.bookId,
        userId: session.user.id,
      },
    });
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error) {
      return { errors: { _form: [err.message] } };
    }
    return { errors: { _form: ["Failed to create review."] } };
  }
  console.log("👍🏻 review successful");
  revalidatePath(paths.bookShowPath(review.bookId));
  redirect(paths.bookShowPath(review.bookId));
}
