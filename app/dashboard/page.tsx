import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import * as actions from "@/app/actions";

export default function DashboardPage() {
  // const session = useSession();
  // let authContent: React.ReactNode;

  // if (session.status === "loading") {
  //   authContent = null;
  // } else if (session.data?.user) {
  //   authContent = (
  //     <div>
  //       <h1>Welcome back, {session.data.user.name}!</h1>
  //       <p>Redirecting you to your dashboard...</p>
  //       <div className="p-4">
  //         <form action={actions.signOut}>
  //           <Button type="submit">Sign Out</Button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   authContent = null;
  // }


}
