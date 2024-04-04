"use client";

import { useFormState } from "react-dom";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import * as actions from "@/app/actions";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface LoginInProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginIn({ className, ...props }: LoginInProps) {
  const session = useSession();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    redirect("/dashboard");
  } else {
    authContent = (
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Sign In</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[475px]">
            <form>
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
            <div>
              <div className="grid grid-cols-1 gap-6">
                <form className="grid gap-2" action={actions.signIn}>
                <DialogFooter>
                  <Button
                    type="submit"
                    className={cn(buttonVariants({ variant: "secondary" }))}
                  >
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                    Github
                  </Button>
                </DialogFooter>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return authContent;
}
