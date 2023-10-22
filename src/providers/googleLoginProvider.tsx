"use client";

import type { ChildrenProps } from "@/interfaces";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function GoogleProvider({ children }: ChildrenProps) {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
      {children}
    </GoogleOAuthProvider>
  );
}
