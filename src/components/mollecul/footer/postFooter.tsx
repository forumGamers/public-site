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
import type { TimeLine } from "@/interfaces/post";
import { LikeAPost, UnLikeAPost } from "@/actions/post";

export type PostFooterProps = {
  liked?: boolean;
  _id: string;
  mutation: (action: TimeLine) => void;
};

export default function PostFooter({
  liked = false,
  _id,
  mutation,
}: PostFooterProps) {
  const LikeHandler = () => {
    mutation({ isLiked: !liked } as TimeLine);

    liked
      ? UnLikeAPost(_id).then((data) => {
          if (!data) mutation({ isLiked: liked } as TimeLine);
        })
      : LikeAPost(_id).then((data) => {
          if (!data) mutation({ isLiked: liked } as TimeLine);
        });
  };

  return (
    <CardFooter className="flex flex-row justify-between p-0">
      <Button
        className="bg-transparent btn btn-ghost gap-1 text-base"
        onClick={LikeHandler}
      >
        <HeartIcon
          className={`h-6 w-6 text-[#EE2924]
             ${liked ? "text-[#EE2924]" : "text-transparent stroke-[#EE2924]"}
            `}
        />
        <span style={{ textTransform: "none" }}>Like</span>
      </Button>

      <Link
        className="btn btn-ghost gap-1 text-white/50 cursor-pointer"
        href={`/comment/${_id}`}
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
