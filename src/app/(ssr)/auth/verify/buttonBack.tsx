"use client";

import { useTransition, useEffect } from "react";
import LoadingOverlay from "@/components/loader/overlay";
import { Button } from "@/components/atom/button/material-tailwind";
import { useRouter } from "next/navigation";

export default function ButtonBack({
  handler,
}: {
  handler: () => Promise<void>;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      handler();
    });
  }, []);

  return (
    <LoadingOverlay spinner text="...loading" active={isPending}>
      <Button
        onClick={() => {
          router.prefetch("/");
        }}
      >
        Home Page
      </Button>
    </LoadingOverlay>
  );
}
