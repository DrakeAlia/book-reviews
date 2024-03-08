"use client";

// this file sets up a provider component called Providers
// that wraps the SessionProvider component. This allows other components
// in your React application to access session-related functionality and
// share states using the Context API.
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
