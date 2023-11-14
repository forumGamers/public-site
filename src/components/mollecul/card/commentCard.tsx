"use client";

import type { Comment } from "@/interfaces/post";
import { useState, useRef } from "react";
import LoadingOverlay from "@/components/loader/overlay";
import AvatarProfile from "@/components/mollecul/avatar/profile";
import { Typography } from "@/components/atom/typography/typograph";
import { useParams } from "next/navigation";
import { Button } from "@/components/atom/button/material-tailwind";

export interface CommentCardProps {
  comment: Comment & { type?: "error" | "loading" };
}

export default function CommentCard({ comment }: CommentCardProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { id } = useParams() as Record<"id", string>;
  const [limit, setLimit] = useState<number>(0);
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <article className=" mb-5 mt-5 pb-5 pt-5 border rounded-sm">
      <LoadingOverlay
        spinner
        active={comment.type === "loading"}
        className="flex flex-col"
      >
        <div
          className={`flex items-start ${
            comment.type === "error"
              ? "border-red-800 bg-red-800"
              : comment.type === "loading"
              ? "border-2 border-blue-500"
              : ""
          }`}
        >
          <AvatarProfile user={comment.User} />
        </div>
        <Typography
          className="font-normal cursor-pointer p-4 mb-4"
          ref={textRef}
        >
          {comment.text}
        </Typography>
      </LoadingOverlay>
      {comment.type === "loading" ? null : comment.type === "error" ? (
        <form>
          <Button
            disabled={limit >= 3}
            variant="text"
            className="rounded-full"
            color="red"
            type="submit"
          >
            {limit < 3 ? "Resend ?" : "Limit Reached"}
          </Button>
        </form>
      ) : (
        <Button
          variant="text"
          className="rounded-full"
          color="red"
          onClick={() => setCollapse(!collapse)}
        >
          Reply
        </Button>
      )}
      {!!comment.Reply.length && (
        <Button variant="text" className="rounded-full" color="red">{`See repl${
          comment.Reply.length > 1 ? "ies" : "y"
        }`}</Button>
      )}
      <br />
    </article>
  );
}
