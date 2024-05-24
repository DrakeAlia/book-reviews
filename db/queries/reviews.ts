// import type { Review } from "@prisma/client";
// import { db } from "@/db";

// export type ReviewWithData = Review & {
//     book: { bookId: string };
//     user: { name: string | null };
// };

// export function fetchReviewById(reviewId: string) {
//     return db.review.findMany({
//         where: { id: reviewId },
//         include: { book: { select: { bookId: true } }, user: { select: { name: true } } },
//     });
// }