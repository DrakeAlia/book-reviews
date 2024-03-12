// Stpehen Grider's code (Error: [next-auth]: `useSession` must be wrapped in a <SessionProvider />):
// "use client";

// import { useSession } from "next-auth/react";
// import * as actions from "@/app/actions";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// export default function UserAuthForm() {
//   const session = useSession();

//   let authContent: React.ReactNode;

//   if (session.status === "loading") {
//     authContent = null;
//   } else if (session.data?.user) {
//     authContent = (
//       <Popover>
//         <PopoverContent>
//           <div className="p-4">
//             <form action={actions.signOut}>
//               <Button type="submit">Sign Out</Button>
//             </form>
//           </div>
//         </PopoverContent>
//       </Popover>
//     );
//   } else {
//     authContent = (
//       <>
//         <Label>
//           <form action={actions.signIn}>
//             <Button type="submit" color="secondary">
//               Sign In
//             </Button>
//           </form>
//         </Label>

//         <Label>
//           <form action={actions.signIn}>
//             <Button type="submit" color="primary" >
//               Sign Up
//             </Button>
//           </form>
//         </Label>
//       </>
//     );
//   }

//   return authContent;
// }

// Lee Robinson's code (Invaild URL - @ async $$ACTION_1):
// import { auth, signIn, signOut } from "@/auth";
// import { Button } from "@/components/ui/button";
// import * as actions from "@/app/actions";

// function SignIn() {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signIn("github");
//       }}
//     >
//       <p>You are not logged in</p>
//       <Button type="submit">Sign in with GitHub</Button>
//     </form>
//   );
// }

// function SignOut({ children }: { children: React.ReactNode }) {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signOut();
//       }}
//     >
//       <p>{children}</p>
//       <Button type="submit">Sign out</Button>
//     </form>
//   );
// }

// export default async function UserAuthForm() {
//   let session = await auth();
//   let user = session?.user?.email;

//   return (
//     <section>
//       <h1>Home</h1>
//       <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
//     </section>
//   );
// }

// My code (Invalid URL - Call Stack: new NodeError):
// "use client";

// import * as React from "react";

// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { Icons } from "@/components/ui/icons";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { siteConfig } from "@/config/site";
// import { buttonVariants } from "@/components/ui/button";
// import { auth, signIn, signOut  } from "@/auth";
// import * as actions from "@/app/actions";

// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

// export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);

//   async function onSubmit(event: React.SyntheticEvent) {
//     event.preventDefault();
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }

//   return (
//     <div className={cn("grid gap-6", className)} {...props}>
//       <form onSubmit={onSubmit}>
//         <div className="grid gap-2">
//           <div className="grid gap-2">
//             <Label className="sr-only" htmlFor="email">
//               Email
//             </Label>
//             <Input
//               id="email"
//               placeholder="name@example.com"
//               type="email"
//               autoCapitalize="none"
//               autoComplete="email"
//               autoCorrect="off"
//               disabled={isLoading}
//             />
//           </div>
//           <Button disabled={isLoading}>
//             {isLoading && (
//               <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//             )}
//             Sign In with Email
//           </Button>
//         </div>
//       </form>
//       <div className="relative">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t" />
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-background px-2 text-muted-foreground">
//             Or sign in with
//           </span>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 gap-3">
//         <form action={actions.signIn}>
//           <Button
//             type="submit"
//             className={cn(buttonVariants({ variant: "secondary" }))}
//           >
//             <Icons.gitHub className="mr-2 h-4 w-4" />
//             Github
//           </Button>
//         </form>
//         {/* <Link
//           target="_blank"
//           rel="noreferrer"
//           href={siteConfig.links.github}
//           className={cn(buttonVariants({ variant: "secondary" }))}
//         >
//           <Icons.gitHub className="mr-2 h-4 w-4" />
//           GitHub
//         </Link> */}
//       </div>
//     </div>
//   );
// }

// Shadcn's code: (Missing gitub oauth credentials)
"use client";

import * as React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as actions from "@/app/actions";
import { useSession } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const session = useSession();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or sign in with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <form className="grid gap-2" action={actions.signIn}>
          <Button
            type="submit"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
        </form>
      </div>
    </div>
  );
}
