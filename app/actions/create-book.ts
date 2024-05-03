"use server";

import type { Book } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

const createBookSchema = z.object({
  title: z
    .string()
    .min(2, "Book's title must be at least 2 characters.")
    .max(50, "Book's title must not be longer than 50 characters."),
  author: z
    .string()
    .min(2, "Author's name must be at least 2 characters.")
    .max(30, "Author's name must not be longer than 30 characters."),
  genre: z.string().min(1, "Genre must be selected."),
});

interface CreateBookFormState {
  errors: {
    title?: string[];
    author?: string[];
    genre?: string[];
    _form?: string[];
  };
}

export async function createBook(
  formState: CreateBookFormState,
  formData: FormData
): Promise<CreateBookFormState> {
  const result = createBookSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    genre: formData.get("genre"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return {
      errors: { _form: ["You must be signed in to create a book."] },
    };
  }

  let book: Book;
  try {
    book = await db.book.create({
      data: {
        title: result.data.title,
        author: result.data.author,
        genre: result.data.genre,
        userId: session.user.id,
      },
    });
    revalidatePath(paths.home());
    redirect(paths.bookShow(book.id));
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { errors: { _form: [err.message] } };
    }
    return { errors: { _form: ["Failed to create book."] } };
  }
}
