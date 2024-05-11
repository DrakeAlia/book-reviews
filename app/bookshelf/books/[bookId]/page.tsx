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
        <Suspense fallback={<BookShowLoading />}>
          <BookShow bookId={bookId} />
        </Suspense>
      </div>
    </section>
  );
}

//   return (
//     <div className="h-full flex-1 flex-col space-y-10 p-6 md:flex">
//       <div className="flex items-center justify-between space-y-2">
//         <div>
//           <h2 className="text-2xl font-bold tracking-tight">Book</h2>
//           <section className="container px-6 pt-8 md:pt-12">
//             <div className="space-y-3">
//               <Suspense fallback={<BookShowLoading />}>
//                 <BookShow bookId={bookId} />
//               </Suspense>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }
