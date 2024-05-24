// import ReviewShow from "@/components/reviews/review-show";
// import ReviewShowLoading from "@/components/reviews/review-show-loading";
// import { Suspense } from "react";

// interface ReviewShowPageProps {
//   // params: { bookId: string; reviewId: string };
//   params: { bookId: string };
// }

// // The ReviewShowPage component fetches a review by its ID and displays its details
// export default function ReviewShowPage({ params }: ReviewShowPageProps) {
//   const { bookId } = params;

//   return (
//     <section className="container px-6 pt-8 md:pt-12">
//       <div className="space-y-3">
//         <Suspense fallback={<ReviewShowLoading />}>
//           <ReviewShow bookId={bookId} />
//         </Suspense>
//       </div>
//     </section>
//   );
// }
