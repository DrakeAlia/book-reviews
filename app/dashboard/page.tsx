"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import * as actions from "@/app/actions";

export default function DashboardPage() {
  const session = useSession();
  let authContent: React.ReactNode;

  if (session.status === "loading" || session.status === "unauthenticated") {
    redirect("/");
  } else if (session.data?.user) {
    authContent = (
      <div>
        <h1>
          Welcome back, {session.data.user.name}!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <Avatar>
          <AvatarImage src={session.data.user.image || ""} />
        </Avatar>
        <div className="p-4">
          <form action={actions.signOut}>
            <Button type="submit">Sign Out</Button>
          </form>
        </div>
      </div>
    );
  }

  return authContent;
}
