"use client";

// this code defines a React component named Profile that uses the
// useSession hook from the "next-auth/react" module to retrieve session data.
// If the user is signed in, it displays the user's data in a formatted string.
// Otherwise, it displays a message indicating that the user is not signed in.

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From client: {JSON.stringify(session.data.user)} </div>;
  }

  return <div>From client: user is NOT signed in</div>;
}
