"use client";

import { Card, CardBody } from "@/components/atom/card/material-tailwind";
import PostMedia from "@/components/mollecul/card/mediaCard";
import PostFooter from "@/components/mollecul/footer/postFooter";
import PostHeader from "@/components/mollecul/header/headerPost";
import PostInsight from "@/components/mollecul/list/postInsight";
import type { TimeLine } from "@/interfaces/post";
import { experimental_useOptimistic as useOptimistic } from "react";

export interface PostCardProps {
  post: TimeLine;
}

export default function PostCard({ post }: PostCardProps) {
  const [timeline, mutation] = useOptimistic(
    post,
    (state, updatedField: TimeLine) => ({
      ...state,
      ...updatedField,
    })
  );

  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full max-w-[75rem] p-5 m-3 bg-[#030712] border border-white/50"
    >
      <PostHeader user={timeline.User} />
      <CardBody className="mt-2 mb-2 p-0">
        <div className="flex flex-col items-start text-white">
          <PostMedia text={timeline.text} media={timeline.Media} />
          <PostInsight
            {...{
              likes: timeline.CountLike,
              shares: timeline.CountShare,
              comments: timeline.CountComment,
            }}
          />
        </div>
        <hr className="mt-2 border-t border-gray-400" />
      </CardBody>
      <PostFooter
        _id={timeline._id}
        liked={timeline.isLiked}
        mutation={mutation}
      />
    </Card>
  );
}
