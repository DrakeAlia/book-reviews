import { db } from "@/db";
import { notFound } from "next/navigation";

import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BookShowProps {
  bookId: string;
}

// The BookShow component fetches a book by its ID and displays its details
export default async function BookShow({ bookId }: BookShowProps) {
  console.log("Book ID ✅:", bookId);
  try {
    const book = await db.book.findUnique({
      where: { id: bookId },
    });

    console.log("Fetching:", book);

    if (!book) {
      console.error("No book found with ID:", bookId);
      return notFound();
    }

    return (
      <div className="container mx-auto p-6">
        <div className="bg-yellow shadow-lg rounded-lg p-4 lg:p-8">
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-xl mb-1">Author: {book.author}</p>
            <p className="text-md italic mb-3">Genre: {book.genre}</p>
          </div>
        </div>
        {/* <Link href="/review" className={cn(buttonVariants(), "rounded-[6px]")}>
          Review book
        </Link> */}
        <Link
          href={`/bookshelf/books/${book.id}/review`}
          className={cn(buttonVariants())}
        >
          <Button>Review book</Button>
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Error fetching book:", error);
    return notFound();
  }
}

// return (
//   <Card className="w-[350px]">
//     <CardHeader>
//       <CardTitle>Book: {book.title}</CardTitle>
//       <CardDescription>Book created by {book.author}</CardDescription>
//     </CardHeader>
//     <CardContent>
//       <form>
//         <div className="grid w-full items-center gap-4">
//           <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" placeholder="Name of your project" />
//           </div>
//           <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="framework">Framework</Label>
//             <Select>
//               <SelectTrigger id="framework">
//                 <SelectValue placeholder="Select" />
//               </SelectTrigger>
//             </Select>
//           </div>
//         </div>
//       </form>
//     </CardContent>
//   </Card>
// );
