import { cn } from "@/lib/utils";
import { Metadata } from "next";

import { CreateAccount } from "./components/create-account";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account to view your bookshelf.",
};

function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}

export default function SignUpPage() {
  return (
    <>
      <div className="container relative p-24">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Container>
            <CreateAccount />
          </Container>
          <div className="flex flex-col space-y-2 text-center"></div>
        </div>
      </div>
    </>
  );
}
