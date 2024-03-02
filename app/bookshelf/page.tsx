import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { bookShelfSchema } from "@/data/schema";

// This page is a server component and shows information about the books.
export const metadata: Metadata = {
  title: "Bookshelf",
  description: "View your bookshelf.",
};

// Simulate a database read for books.
async function getBooks() {
  const data = await fs.readFile(path.join(process.cwd(), "data/books.json"));

  const books = JSON.parse(data.toString());

  return z.array(bookShelfSchema).parse(books);
}

export default async function BookshelfPage() {
  const books = await getBooks();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bookshelf</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of books in your bookshelf.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* <UserNav /> */}
          </div>
        </div>
        <DataTable data={books} columns={columns} />
      </div>
    </>
  );
}
