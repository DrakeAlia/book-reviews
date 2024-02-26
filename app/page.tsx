import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button";

// Main page for the site
export default function HomePage() {
  return (
    <div className="container relative p-16">
      <PageHeader>
        <PageHeaderHeading>BookRealm</PageHeaderHeading>
        <PageHeaderDescription>
          BookRealm is your gateway to a universe of books. Discover new
          stories, share your insights through reviews, and curate your personal
          booklist.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/sign-in" className={cn(buttonVariants())}>
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Sign Up
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
