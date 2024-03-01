import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { UserAuthForm } from "../sign-in/user-form";
import { CreateAccount } from "./components/create-account";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account to view your bookshelf.",
};

export default function SignUpPage() {
  return (
    <>
      <div className="container relative p-24">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <CreateAccount />
          <div className="flex flex-col space-y-2 text-center"></div>
        </div>
      </div>
    </>
  );
}
