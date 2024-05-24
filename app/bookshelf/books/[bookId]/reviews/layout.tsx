import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Review",
  description: "Create a book review and share your thoughts with the world.",
};

interface ReviewLayoutProps {
  children: React.ReactNode;
  bookId: string;
}

export default function ReviewLayout({ children }: ReviewLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">
            Review for Book {""}
          </h2>
          <p className="text-muted-foreground">
            Create review for this book and share your thoughts with the world.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5"></aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
