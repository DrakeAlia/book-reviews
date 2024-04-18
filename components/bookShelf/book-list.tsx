// import { Badge } from "../ui/badge";
// import { db } from "@/db";
// import Link from "next/link";
// import paths from "@/paths";

// export default async function BookList() {
//   const reviews = await db.review.findMany();

//   const renderReviews = reviews.map((review) => {
//     return (
//         <Link key={review.id} href={paths.bookShelfShow(review.id)}>
//             <a>
//             <Badge>{review.title}</Badge>
//             </a>
//         </Link>
//     );
//   });

//   return <div className="flex flex-row flex-wrap gap-2">{renderReviews}</div>;
// }
