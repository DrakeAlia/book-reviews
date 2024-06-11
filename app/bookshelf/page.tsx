import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { db } from "@/db";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// This is the Bookshelf page. It displays a list of books that have been reviewed.
export default async function BookshelfPage() {
  const books = await db.book.findMany({
    include: {
      reviews: true,
    },
  });

  return (
    <>
      <PageHeader>
        <PageHeaderHeading className="hidden md:block">
          Here&apos;s the{" "}
          <span className="text-primary font-bold">Bookshelf</span>
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">BookShelf</PageHeaderHeading>
        <PageHeaderDescription>
          See the books that you have reviewed as well as what other
          people&apos;s book reviews.
        </PageHeaderDescription>
      </PageHeader>
      <div className="h-full flex-1 flex-col space-y-10 p-6 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bookshelf</h2>
            <p className="text-muted-foreground">
              A list of books with their details and reviews.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/book" className={cn(buttonVariants())}>
              Add a book
            </Link>
          </div>
        </div>
        <DataTable data={books} columns={columns} />
      </div>
    </>
  );
}
