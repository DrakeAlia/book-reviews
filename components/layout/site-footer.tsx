import { siteConfig } from "@/config/site";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-8 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "font-medium underline underline-offset-4 p-0"
            )}
          >
            DrakeAlia
          </Link>
          . The source code is available on{" "}
          <Link
            href={siteConfig.links.githubProject}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "font-medium underline underline-offset-4 p-0"
            )}
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
