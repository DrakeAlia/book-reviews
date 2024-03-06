"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/app/auth";
import { db } from "@/db";

const createReviewSchema = z.object({
  bookId: z.string(),
  rating: z.number(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

interface CreateReviewFormState {
  bookId: string;
  rating: number;
  status: string;
  label: string;
  priority: string;
}

export async function createReview(data: CreateReviewFormState) {}

revalidatePath("/reviews");
redirect("/reviews");
