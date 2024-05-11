import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookShelf",
  description:
    "See the books that you have reviewed as well as what other people's book reviews.",
};

interface BookShelfLayoutProps {
  children: React.ReactNode;
}

export default function BookShelfLayout({ children }: BookShelfLayoutProps) {
  return (
    <>
      <div className="container relative">
        <section>
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
