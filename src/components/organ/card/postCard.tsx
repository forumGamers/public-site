import { Card, CardBody } from "@/components/atom/card/material-tailwind";
import PostMedia from "@/components/mollecul/card/mediaCard";
import PostFooter from "@/components/mollecul/footer/postFooter";
import PostHeader from "@/components/mollecul/header/headerPost";
import PostInsight from "@/components/mollecul/list/postInsight";
import type { TimeLine } from "@/interfaces/post";

export interface PostCardProps {
  post: TimeLine;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full max-w-[75rem] p-5 m-3 bg-[#030712] border border-white/50"
    >
      <PostHeader user={post.User} />
      <CardBody className="mt-2 mb-2 p-0">
        <div className="flex flex-col items-start text-white">
          <PostMedia text={post.text} media={post.Media} />
          <PostInsight
            {...{
              likes: post.CountLike,
              shares: post.CountShare,
              comments: post.CountComment,
            }}
          />
        </div>
        <hr className="mt-2 border-t border-gray-400" />
      </CardBody>
      <PostFooter _id={post._id} liked={post.isLiked} />
    </Card>
  );
}
