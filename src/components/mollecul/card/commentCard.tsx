"use client";

import type { Comment } from "@/interfaces/post";
import { useState, useRef, type Dispatch, type SetStateAction } from "react";
import LoadingOverlay from "@/components/loader/overlay";
import AvatarProfile from "@/components/mollecul/avatar/profile";
import { Typography } from "@/components/atom/typography/typograph";
import { Button } from "@/components/atom/button/material-tailwind";
import ReplyForm from "../collapse/replyForm";
import type { NewComments } from "@/components/organ/card/commentCard";
import ReplyList from "../collapse/replyList";

export interface CommentCardProps {
  comment: Comment & { type?: "error" | "loading" };
  setCommentState: Dispatch<SetStateAction<Comment[]>>;
  setCommentOptimistic: (action: NewComments) => void;
}

export default function CommentCard({
  comment,
  setCommentState,
  setCommentOptimistic,
}: CommentCardProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [limit, setLimit] = useState<number>(0);
  const [collapse, setCollapse] = useState<boolean>(false);
  const [replyVisible, setReplyVisible] = useState<boolean>(false);

  return (
    <article className=" mb-5 mt-5 pb-5 pt-5 border rounded-sm">
      <LoadingOverlay
        spinner
        active={comment.type === "loading"}
        className="flex flex-col">
        <div
          className={`flex items-start ${
            comment.type === "error"
              ? "border-red-800 bg-red-800"
              : comment.type === "loading"
              ? "border-2 border-blue-500"
              : ""
          }`}>
          <AvatarProfile user={comment.User} />
        </div>
        <Typography
          className="font-normal cursor-pointer p-4 mb-4"
          ref={textRef}>
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
            type="submit">
            {limit < 3 ? "Resend ?" : "Limit Reached"}
          </Button>
        </form>
      ) : (
        <Button
          variant="text"
          className="rounded-full"
          color="red"
          onClick={() => setCollapse(!collapse)}>
          Reply
        </Button>
      )}
      {!!comment.Reply.length && (
        <Button
          onClick={() => setReplyVisible(!replyVisible)}
          variant="text"
          className="rounded-full"
          color="red">{`See repl${
          comment.Reply.length > 1 ? "ies" : "y"
        }`}</Button>
      )}
      <ReplyForm
        comment={comment}
        open={collapse}
        setCommentState={setCommentState}
        setCommentOptimistic={setCommentOptimistic}
      />
      <br />
      {replyVisible && comment.Reply.map((el) => <ReplyList reply={el} />)}
    </article>
  );
}
