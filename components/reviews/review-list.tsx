import { db } from "@/db";
// import paths from "@/paths";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";

export default async function ReviewList() {
  const reviews = await db.review.findMany();

  const renderedReviews = reviews.map((review) => {
    return (
      <div
        key={review.id}
        className="p-4 rounded-md shadow-md border border-zinc-200"
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <div className="font-bold text-lg">{review.rating}</div>
            <div className="ml-2 text-sm text-muted-foreground">/5</div>
          </div>
        </div>
        <div className="mt-2">{review.description}</div>
      </div>
    );
  });
  console.log("Reviews:", reviews);
  return <div className="flex flex-col flex-wrap gap-2">{renderedReviews}</div>;
}
