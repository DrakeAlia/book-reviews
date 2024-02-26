
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { UserAuthForm } from "../sign-in/user-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account to view your bookshelf.",
};

export default function SignUpPage() {
  return (
    <>
      <div className="container relative p-24">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password to sign up for an account.
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

// type SignUpFormState = {
//   email: string;
//   password: string;
// };

// export default function SignUp() {
//   const [formState, setFormState] = useState<SignUpFormState>({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(formState);
//   };

//   return (
//     <div className="container relative p-24">
//       <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
//         <div className="flex flex-col space-y-2 text-center">
//           <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
//           <p className="text-sm text-muted-foreground">
//             Enter your email and password to sign up for an account.
//           </p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="grid gap-2">
//             <div className="grid gap-1">
//               <label className="sr-only" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 placeholder=""
//                 type="email"
//                 autoCapitalize="none"
//                 autoComplete="email"
//                 autoCorrect="off"
//                 value={formState.email}
//                 onChange={(event) =>
//                   setFormState({ ...formState, email: event.target.value })
//                 }
//               />
//             </div>
//             <div className="grid gap-1">
//               <label className="sr-only" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 placeholder=""
//                 type="password"
//                 autoCapitalize="none"
//                 autoComplete="current-password"
//                 autoCorrect="off"
//                 value={formState.password}
//                 onChange={(event) =>
//                   setFormState({ ...formState, password: event.target.value })
//                 }
//               />
//             </div>
//             <Button type="submit">Sign Up</Button>
//           </div>
//         </form>
//         <p className="px-8 text-center text-sm text-muted-foreground">
//           By clicking continue, you agree to our{" "}
//           <a
//             href="/terms"
//             className="underline underline-offset-4 hover:text-primary"
//           >
//             Terms of Service
//           </a>{" "}
//           and{" "}
//           <a
//             href="/privacy"
//             className="underline underline-offset-4 hover:text-primary"
//           >
//             Privacy Policy
//           </a>
//           .
//         </p>
//       </div>
//     </div>
//   );
// }
