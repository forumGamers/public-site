"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogHeader, DialogBody } from "./material-tailwind";
import type { ChildrenProps } from "@/interfaces";

export type LongModalProps = ChildrenProps & {
  title: string;
};

export default function LongModal({ children, title }: LongModalProps) {
  const router = useRouter();
  const handleChange = (open: boolean) => {
    if (!open) router.back();
  };

  return (
    <Dialog open handler={handleChange}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody divider className="h-[40rem] overflow-scroll scrollbar-hide">
        {children}
      </DialogBody>
    </Dialog>
  );
}
