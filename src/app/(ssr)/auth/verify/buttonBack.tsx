"use client";

import { useTransition, useEffect } from "react";
import LoadingOverlay from "@/components/loader/overlay";
import { Button } from "@/components/atom/button/material-tailwind";

export default function ButtonBack({
  handler,
}: {
  handler: () => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      handler();
    });
  }, []);

  return (
    <LoadingOverlay spinner text="...loading" active={isPending}>
      <Button>Home Page</Button>
    </LoadingOverlay>
  );
}
