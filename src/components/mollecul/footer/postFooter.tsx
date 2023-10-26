"use client";

import { CardFooter } from "@/components/atom/card/material-tailwind";
import { HeartIcon } from "@/components/icons/heroIconsSolid";
import {
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "@/components/icons/heroIconsOutline";
import Link from "next/link";
import { Button } from "@/components/atom/button/material-tailwind";

export type PostFooterProps = {
  liked?: boolean;
  _id: string;
};

export default function PostFooter({ liked = false, _id }: PostFooterProps) {
  return (
    <CardFooter className="flex flex-row justify-between p-0">
      <Button className="bg-transparent btn btn-ghost gap-1 text-base">
        <HeartIcon
          className={`h-6 w-6 text-[#EE2924]
             ${liked ? "text-[#EE2924]" : "text-transparent stroke-[#EE2924]"}
            `}
        />
        <span style={{ textTransform: "none" }}>Like</span>
      </Button>

      <Link
        className="btn btn-ghost gap-1 text-white/50"
        href={`/comments/${_id}`}
      >
        <ChatBubbleLeftIcon className="h-6 w-6 text-[#EE2924]" />
        <span style={{ textTransform: "none" }}>Comment</span>
      </Link>

      <Button className="btn btn-ghost gap-1 text-white/50 bg-transparent">
        <PaperAirplaneIcon className="h-6 w-6 text-[#EE2924]" />
        <span style={{ textTransform: "none" }}>Send</span>
      </Button>

      <Link
        className="btn btn-ghost gap-1 text-white/50"
        href={`/shares/${_id}`}
      >
        <ShareIcon className="h-6 w-6 text-[#EE2924]" />
        <span style={{ textTransform: "none" }}>Share</span>
      </Link>
    </CardFooter>
  );
}
