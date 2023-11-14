"use client";

import type { Comment } from "@/interfaces/post";
import {
  experimental_useOptimistic as useOptimistic,
  useState,
  useEffect,
  useTransition,
  useRef,
} from "react";
import { Textarea } from "@/components/atom/form/material-tailwind";
import { Button } from "@/components/atom/button/material-tailwind";
import { useParams } from "next/navigation";
import { commentPost, getPostComment } from "@/actions/post";
import CommentCard from "@/components/mollecul/card/commentCard";
import { Spinner } from "@/components/loader/material-tailwind";

export interface CommentSectionProps {
  comments: Comment[];
}

export interface NewComments {
  data: Comment;
  type: "error" | "loading";
}

export default function CommentSection({ comments }: CommentSectionProps) {
  const [isPending, startTransition] = useTransition();
  const [commentState, setCommentState] = useState<Comment[]>(comments);
  const [commentDatas, setCommentDatas] = useOptimistic(
    commentState,
    (state, { data, type }: NewComments) => {
      switch (true) {
        case type === "error":
          return [{ ...data, isError: true }, ...state];
        case type === "loading":
          return state.length ? [data, ...state] : [data];
        default:
          return state;
      }
    }
  );
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const { id } = useParams() as Record<"id", string>;
  const actionHandler = async (formData: FormData) => {
    const [formName] = Array.from<string>(formData.keys());
    const [_, postId] = formName.split("-");

    const text = formData.get(formName) as string;

    setCommentDatas({ type: "loading", data: { text } as Comment });

    commentPost(text, postId).then(({ data, success }) => {
      if (!success)
        setCommentDatas({ type: "error", data: { text } as Comment });

      setCommentState([{} as Comment, ...commentState]);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entities) => {
        if (entities[0].isIntersecting)
          startTransition(async () => {
            if (commentState.length) {
              const { searchAfterId, searchAfterTimeStamp } = commentState[
                commentState.length - 1
              ];
              const comments = await getPostComment(id, {
                page: `${searchAfterTimeStamp},${searchAfterId}`,
              });
              if (comments.length)
                setCommentState((prev) => [...prev, ...comments]);
            }
          });
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [commentState]);

  return (
    <>
      {!!commentDatas.length &&
        commentDatas.map((comment) => <CommentCard comment={comment} />)}
      <div ref={ref}>
        {isPending && <Spinner className="h-4 w-4" color="blue" />}
      </div>
      <form
        className="sticky bottom-0 p-4 bg-black"
        style={{ width: "calc(100% - 2rem)" }}
        action={actionHandler}
      >
        <Textarea
          placeholder="Your Comment"
          variant="outlined"
          rows={2}
          value={text}
          name={`text-${id}`}
          onChange={onChange}
        />
        <Button
          variant="text"
          className="rounded-full bg-blue-700 text-white hover:bg-white hover:text-blue-700"
          type="submit"
        >
          send
        </Button>
      </form>
    </>
  );
}
