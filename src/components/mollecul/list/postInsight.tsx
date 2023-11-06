import { Typography } from "@/components/atom/typography/typograph";

export type PostInsightProps = {
  likes: number;
  comments: number;
  shares: number;
};

export default function PostInsight({
  likes,
  comments,
  shares,
}: PostInsightProps) {
  return (
    <section className="flex flex-row justify-between items-center w-full">
      <Typography className="text-xs">
        {likes} {`like${likes > 1 ? "s" : ""}`}
      </Typography>
      <div className="flex flex-row justify-end items-center flex-grow">
        <Typography className="text-xs">
          {comments} {`comment${comments > 1 ? "s" : ""}`}
        </Typography>
        <Typography className="text-xs ml-2">
          {shares} {`share${shares > 1 ? "s" : ""}`}
        </Typography>
      </div>
    </section>
  );
}
