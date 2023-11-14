"use client";

import type { Reply } from "@/interfaces/post";
import LoadingOverlay from "@/components/loader/overlay";
import AvatarProfile from "@/components/mollecul/avatar/profile";
import { Typography } from "@/components/atom/typography/typograph";
import { Button } from "@/components/atom/button/material-tailwind";
import { useRef, useState } from "react";

export interface ReplyCardProps {
  reply: Reply & { type?: "error" | "loading" };
}

export default function ReplyCard({ reply }: ReplyCardProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <LoadingOverlay spinner active={reply.type === "loading"}>
        <div
          className={`flex items-center ml-8 pl-4 ${
            reply.type === "error"
              ? "border-red-800 bg-red-800"
              : reply.type === "loading"
              ? "border-2 border-blue-500"
              : ""
          }`}
        >
          <AvatarProfile user={reply.User} />
          <Typography className="font-normal cursor-pointer" ref={textRef}>
            {reply.text}
          </Typography>
        </div>
      </LoadingOverlay>
      <Button
        type="button"
        onClick={() => setOpen(!open)}
        variant="text"
        className="rounded-full"
        color="red"
      >
        {open ? "close" : "reply"}
      </Button>
    </>
  );
}
