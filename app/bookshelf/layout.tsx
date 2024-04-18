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
            Here&apos;s the BookShelf
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">BookShelf</PageHeaderHeading>
          <PageHeaderDescription>
            {/* See your books that you have reviewed as well as what other&apos;s book reviews. */}
            See the books that you have reviewed as well as what other
            people&apos;s book reviews.
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
