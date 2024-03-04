import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "BookShelf",
  description: "Check out some examples app built using the components.",
};

interface BookShelfLayoutProps {
  children: React.ReactNode;
}

export default function BookShelfLayout({ children }: BookShelfLayoutProps) {
  return (
    <>
      <div className="container relative">
        <PageHeader>
          <PageHeaderHeading className="hidden md:block">
            BookShelf
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">BookShelf</PageHeaderHeading>
          <PageHeaderDescription>
            This is a collection of books that you have read and reviewed. You
            can also add new books to the collection.
          </PageHeaderDescription>
          <PageActions>
            <Link
              href="/review"
              className={cn(buttonVariants(), "rounded-[6px]")}
            >
              Review a book
            </Link>
          </PageActions>
        </PageHeader>
        <section>
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
