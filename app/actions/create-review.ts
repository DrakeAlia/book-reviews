// "use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { z } from "zod";
// import { auth } from "@/auth";
// import { db } from "@/db";
// import { title } from "process";
// import { de } from "@faker-js/faker";

// const createReviewSchema = z.object({
//     title: z.string().min(1).max(100),
//     author: z.string().min(1).max(100),
//     genre: z.string().min(1).max(100),
//     description: z.string().min(1).max(1000),
//     rating: z.number().min(1).max(5),
// });

// interface CreateReviewData {
//     title: string;
//     author: string;
//     genre: string;
//     description: string;
//     rating: number;
// }

// export async function createReview(
//     formState: CreateReviewData,
//     formData: FormData
// ): Promise<CreateReviewData> {
    
