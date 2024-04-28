import Link from "next/link";
import paths from "@/paths";
import BookShow from "@/components/books/book-show";
import BookShowLoading from "@/components/books/book-show-loading";
import { Suspense } from "react";

interface BookShowPageProps {
  params: { bookId: string };
}
// // The BookShowPage component fetches a book by its ID and displays its details
export default function BookShowPage({ params }: BookShowPageProps) {
  const { bookId } = params;

  return (
    <section className="container px-6 pt-8 md:pt-12">
      <div className="space-y-3">
        {/* <Link
          className="underline decoration-solid"
          href={paths.bookShow(bookId)}
        >
          Back to Books
        </Link> */}
        <Suspense fallback={<BookShowLoading />}>
          <BookShow bookId={bookId} />
        </Suspense>
      </div>
    </section>
  );
}

// interface BookShowPageProps {
//   params: { bookId: string; reviewId: string | null };
// }

// export default function BookShowPage({ params }: BookShowPageProps) {
//   const { reviewId } = params;

//   if (reviewId) {
//     console.log("Review ID is present:", reviewId);
//   } else {
//     console.log("Review ID is missing or undefined");
//   }

//   return null;
// }
