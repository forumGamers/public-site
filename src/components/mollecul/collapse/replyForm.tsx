"use client";

import Collapse from "@/components/atom/collapse/material-tailwind";
import { Card, CardBody } from "@/components/atom/card/material-tailwind";
import { Button } from "@/components/atom/button/material-tailwind";
import { Textarea } from "@/components/atom/form/material-tailwind";
import { type Dispatch, type SetStateAction, useState } from "react";
import type { Comment } from "@/interfaces/post";
import type { NewComments } from "@/components/organ/card/commentCard";
import { ReplyComment } from "@/actions/post";

export interface ReplyFormProps {
  open: boolean;
  setCommentState: Dispatch<SetStateAction<Comment[]>>;
  setCommentOptimistic: (action: NewComments) => void;
  comment: Comment;
}

export default function ReplyForm({
  open,
  setCommentState,
  setCommentOptimistic,
  comment,
}: ReplyFormProps) {
  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const actionHandler = async (formData: FormData) => {
    const text = formData.get("text") as string;

    setCommentOptimistic({
      type: "loading",
      data: { Reply: [...comment.Reply, { text }] } as Comment,
    });

    ReplyComment(text, comment._id).then(({ data, success }) => {
      if (!success)
        return setCommentOptimistic({
          type: "error",
          data: { Reply: [...comment.Reply, { text }] } as Comment,
        });

      const now = new Date();
      setCommentState((prev) =>
        prev.map((el) =>
          el._id === comment._id
            ? {
                ...el,
                Reply: [
                  ...el.Reply,
                  {
                    text,
                    _id: data?.id ?? "",
                    User: {
                      id: data?.user.id ?? "",
                      imageUrl: data?.user.image_url ?? "",
                      UUID: data?.user.id ?? "",
                      username: data?.user.username ?? "",
                      bio: data?.user.bio ?? "",
                      isfollowed: false,
                      backgroundImage: data?.user.background_url ?? "",
                    },
                    CommentId:comment._id,
                    CreatedAt:now,
                    UpdatedAt:now,
                    userId:data?.user.id ?? "",
                  },
                ],
              }
            : el
        )
      );
    });
  };

  return (
    <Collapse open={open}>
      <Card className="my-4 mx-auto w-8/12">
        <CardBody>
          <form action={actionHandler}>
            <Textarea
              placeholder="Your Comment"
              variant="outlined"
              rows={8}
              name="text"
              value={text}
              onChange={onChange}
            />
            <Button variant="text" className="rounded-full" type="submit">
              send
            </Button>
          </form>
        </CardBody>
      </Card>
    </Collapse>
  );
}
