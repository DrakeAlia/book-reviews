// export default function Home() {
//   return (
//     <div className="container mx-auto p-6 m-2 max-w-4xl rounded-lg shadow-md mt-10 border-2 border-gray-700">
//       <h1 className="text-2xl font-semibold">Welcome to BookRealm</h1>
//       <p className="mt-4 ">
//         BookRealm is your gateway to a universe of books. Discover new stories,
//         share your insights through reviews, and curate your personal booklist.
//         Sign in to join our community of book enthusiasts, write reviews, and
//         add your favorite reads to your list.
//       </p>
//       <div className="mt-6">
//         <a
//           href="/signin"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//         >
//           Sign In to Start Exploring
//         </a>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "./config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button";

// Main page for the site
export default function IndexPage() {
  return (
    <div className="container relative p-16">
      <PageHeader>
        <PageHeaderHeading>BookRealm</PageHeaderHeading>
        <PageHeaderDescription>
          BookRealm is your gateway to a universe of books. Discover new
          stories, share your insights through reviews, and curate your personal
          booklist. Sign in to join our community of book enthusiasts, write
          reviews, and add your favorite reads to your list.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            Sign up
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Sign In
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
