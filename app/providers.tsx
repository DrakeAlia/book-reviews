"use client";

// This file is a wrapper around the next-auth/react module's SessionProvider component.
// This is for the server side.
// It's used to provide the session context to the rest of the application.
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
