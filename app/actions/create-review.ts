"use server";

import type { Review } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

const createReviewSchema = z.object({
  title: z.string().min(1).max(100),
  author: z.string().min(1).max(100),
  genre: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
  rating: z.number().min(1).max(5),
});

interface createReviewFormState {
  errors: {
    title?: string[];
    author?: string[];
    genre?: string[];
    description?: string[];
    rating?: string[];
    _form?: string[];
  };
}

export async function createReview(
  formState: createReviewFormState,
  formData: FormData
): Promise<createReviewFormState> {
  const result = createReviewSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    genre: formData.get("genre"),
    description: formData.get("description"),
    rating: formData.get("rating"),
  });
  console.log(result);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to create a review."],
      },
    };
  }

  let review: Review;
  try {
    review = await db.review.create({
      data: {
        title: result.data.title,
        author: result.data.author,
        genre: result.data.genre,
        description: result.data.description,
        rating: result.data.rating,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Failed to create review."],
        },
      };
    }
  }

  revalidatePath(paths.home());
  redirect(paths.reviewShow(review.slug));
}
