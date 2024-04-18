"use server";

import type { Review } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

const createReviewSchema = z.object({
  // genre: z.string({
  //   required_error: "Please select an genre to display.",
  // }),
  genre: z.string().min(1, {
    message: "Genre must be selected.",
  }),
  title: z
    .string()
    .min(2, {
      message: "Book's title must be at least 2 characters.",
    })
    .max(20, {
      message: "Book's title must not be longer than 20 characters.",
    }),
  author: z
    .string()
    .min(2, {
      message: "Author must be at least 2 characters.",
    })
    .max(20, {
      message: "Author name must not be longer than 20 characters.",
    }),
  description: z
    .string()
    .min(10, {
      message: "Review must be at least 10 characters.",
    })
    .max(1000, {
      message: "Review must not be longer than 1000 characters.",
    }),
});

interface createReviewFormState {
  errors: {
    genre?: string[];
    title?: string[];
    author?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createReview(
  formState: createReviewFormState,
  formData: FormData
): Promise<createReviewFormState> {
  const result = createReviewSchema.safeParse({
    genre: formData.get("genre"),
    title: formData.get("title"),
    author: formData.get("author"),
    description: formData.get("description"),
  });

  console.log(result);

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: { _form: ["You must be signed in to create a review."] },
    };
  }

  let review: Review;
  try {
    review = await db.review.create({
      data: {
        genre: result.data.genre,
        title: result.data.title,
        author: result.data.author,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { errors: { _form: [err.message] } };
    } else {
      return { errors: { _form: ["Failed to create review."] } };
    }
  }

  revalidatePath(paths.home());
  redirect(paths.bookShelfShow());
}
