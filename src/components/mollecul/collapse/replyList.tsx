"use client";

import type { Reply } from "@/interfaces/post";
import LoadingOverlay from "@/components/loader/overlay";
import AvatarProfile from "../avatar/profile";
import { Typography } from "@/components/atom/typography/typograph";

export interface ReplyListProps {
  reply: Reply & { type?: "loading" | "error" };
}

export default function ReplyList({ reply }: ReplyListProps) {
  return (
    <article className=" mb-5 mt-5 pb-5 pt-5 border rounded-sm">
      <LoadingOverlay
        spinner
        active={reply.type === "loading"}
        className="flex flex-col"
      >
        <div
          className={`flex items-start ${
            reply.type === "error"
              ? "border-red-800 bg-red-800"
              : reply.type === "loading"
              ? "border-2 border-blue-500"
              : ""
          }`}
        >
          <AvatarProfile user={reply.User} />
        </div>
        <Typography className="font-normal cursor-pointer p-4 mb-4">
          {reply.text}
        </Typography>
      </LoadingOverlay>
    </article>
  );
}
