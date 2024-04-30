import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { db } from "@/db";

// This is the Bookshelf page. It displays a list of books that have been reviewed.
export default async function BookshelfPage() {
  const reviews = await db.review.findMany();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-10 p-6 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bookshelf</h2>
            <p className="text-muted-foreground">
              Books that have been reviewed
            </p>
          </div>
          <div className="flex items-center space-x-2"></div>
        </div>
        <DataTable data={reviews} columns={columns} />
      </div>
    </>
  );
}
