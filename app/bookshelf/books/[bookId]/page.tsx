import BookShow from "@/components/book/book-show";
import BookShowLoading from "@/components/book/book-show-loading";
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
        <Suspense fallback={<BookShowLoading />}>
          <BookShow bookId={bookId} />
        </Suspense>
      </div>
    </section>
  );
}
