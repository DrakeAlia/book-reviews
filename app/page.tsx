import Hero from "@/components/hero";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

// Main page for the site
export default function HomePage() {
  return (
    <div className="container relative">
      {/* <Hero /> */}
      <PageHeader>
        {/* <PageHeaderHeading>Welcome to BookBlend</PageHeaderHeading> */}
        <PageHeaderHeading>
          Welcome to{" "}
          <span className="text-primary font-bold">BookBlend</span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          Here you can write a review for books that you have read and rate
          them. These reviewed books will be added to your bookshelf. Shared
          reviews will be visible to other users.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/review" className={cn(buttonVariants())}>
            Start Review
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="/bookshelf"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            View Bookshelf
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
