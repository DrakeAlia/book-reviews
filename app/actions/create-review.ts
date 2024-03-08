"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";

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
