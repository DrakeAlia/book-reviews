// "use client";

// import * as React from "react";

// import { cn } from "@/lib/utils";
// import { Icons } from "@/components/ui/icons";
// import { Button, buttonVariants } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useSession } from "next-auth/react";
// import * as actions from "@/app/actions";

// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

// export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
//   const session = useSession();
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
//             <Label className="sr-only" htmlFor="password">
//               Password
//             </Label>
//             <Input
//               id="password"
//               placeholder="••••••••"
//               type="password"
//               autoCapitalize="none"
//               autoComplete="password"
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
//       <div className="grid grid-cols-1 gap-6">
//         <form className="grid gap-2" action={actions.signIn}>
//           <Button
//             type="submit"
//             className={cn(buttonVariants({ variant: "secondary" }))}
//           >
//             <Icons.gitHub className="mr-2 h-4 w-4" />
//             Github
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// Lee Robinson's code:

import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as actions from "@/app/actions";
import React from "react";

// function SignIn() {
//   return (
//     <form className="grid gap-2" action={actions.signIn}>
//       <p>You are not logged in</p>
//       <Button
//         type="submit"
//         className={cn(buttonVariants({ variant: "secondary" }))}
//       >
//         <Icons.gitHub className="mr-2 h-4 w-4" />
//         GitHub
//       </Button>
//     <div className="grid gap-2">
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" type="email" placeholder="m@example.com" />
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="password">Password</Label>
//           <Input id="password" type="password" />
//         </div>
//     </form>
//   );
// }

function SignIn() {
  return (
    <form className="grid gap-2" action={actions.signIn}>
      <p>You are not logged in</p>
      <Button
        type="submit"
        className={cn(buttonVariants({ variant: "secondary" }))}
      >
        <Icons.gitHub className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </form>
  );
}

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form className="grid gap-2" action={actions.signOut}>
      <p>{children}</p>
      <Button type="submit">Sign out</Button>
    </form>
  );
}

export default async function UserAuthForm() {
  let session = await auth();
  let user = session?.user?.email;

  return (
    <section>
      <h1>Home</h1>
      <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
    </section>
  );
}
