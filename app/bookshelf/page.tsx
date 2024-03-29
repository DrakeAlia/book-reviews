import { promises as fs } from "fs";
import { z } from "zod";
import path from "path";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { bookShelfSchema } from "@/app/bookshelf/data/schema";

// Simulate a database read for books.
async function getBooks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/bookshelf/data/books.json")
  );

  const books = JSON.parse(data.toString());

  return z.array(bookShelfSchema).parse(books);
}

export default async function BookshelfPage() {
  const books = await getBooks();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-10 p-6 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome to your bookshelf
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all the books you have read and reviewed.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={books} columns={columns} />
      </div>
    </>
  );
}
