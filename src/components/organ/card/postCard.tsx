import { Card, CardBody } from "@/components/atom/card/material-tailwind";
import PostMedia from "@/components/mollecul/card/mediaCard";
import PostFooter from "@/components/mollecul/footer/postFooter";
import PostHeader from "@/components/mollecul/header/headerPost";
import PostInsight from "@/components/mollecul/list/postInsight";

export default function PostCard() {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full max-w-[75rem] p-5 m-3 bg-[#030712] border border-white/50"
    >
      <PostHeader user={{} as any} />
      <CardBody className="mt-2 mb-2 p-0">
        <div className="flex flex-col items-start text-white">
          <PostMedia {...({} as any)} />
          <PostInsight {...({} as any)} />
        </div>
        <hr className="mt-2 border-t border-gray-400" />
      </CardBody>
      {/* <PostFooter /> */}
    </Card>
  );
}
