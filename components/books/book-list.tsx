// import { db } from "@/db";
// import Link from "next/link";
// import paths from "@/paths";
// import { Badge } from "../ui/badge";

// export default async function BookList() {
//   const books = await db.book.findMany();

//   const renderBooks = books.map((book) => {
//     return (
//       <div key={book.id}>
//         <Link href={paths.bookShow(book.slug)}>
//           <Badge variant="secondary">{book.slug}</Badge>
//         </Link>
//       </div>
//     );
//   });

//   return <div>{renderBooks}</div>;
// }
