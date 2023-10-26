"use client";

import type { ChildrenProps } from "@/interfaces";
import { Button } from "./material-tailwind";

export default function ButtonClickRipple({
  filled,
  handler,
  children,
  type = "button",
}: ChildrenProps & {
  filled: boolean;
  handler: () => Promise<void>;
  type?: "submit" | "button";
}) {
  return (
    <Button
      className="cursor-pointer ml-0"
      type={type}
      onClick={handler}
      variant={filled ? "filled" : "outlined"}
    >
      {children}
    </Button>
  );
}
