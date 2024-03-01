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
        <PageHeaderHeading>BookBlend</PageHeaderHeading>
        <PageHeaderDescription>
          Welcome to BookBlend, where you can write a review and rate a books
          that you have read. Sign in or sign up to get started
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
