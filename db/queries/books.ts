import type { Book, Review } from "@prisma/client";
import { db } from "@/db";


// export type BookWithData = Book & {
//   review: Review;
//   user: { name: string | null };
// };
// // The fetchBookById function fetches a book by its ID and includes its review and user details
// export function fetchBookById(reviewId: string) {
//   return db.book.findUnique({
//     where: { id: reviewId },
//     include: { review: true, user: { select: { name: true } } },
//   });
// }

export function fetchBookById(bookId: string) {
  // Simulating the availability of review ID for demonstration purposes
  const reviewId = "review123";

  if (reviewId) {
    console.log("Review ID is present:", reviewId);
  } else {
    console.log("Review ID is missing or undefined");
  }

  return null;
}