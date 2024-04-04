"use client";

import { Avatar, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { useSession } from "next-auth/react";
import React from "react";
import * as actions from "@/app/actions";
import { UserAuthForm } from "../login/user-form";
import Link from "next/link";

export default function SiteHeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger>
          <Avatar className="h-6 w-6 m-2">
            <AvatarImage src={session.data.user.image || ""} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex justify-center p-2">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="submit">
              Sign In
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="">Join the community</DialogTitle>
            </DialogHeader>
            <div className="container relative p-12">
              <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Sign In
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Enter your email below to sign in and view your bookshelf.
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
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return authContent;
}
