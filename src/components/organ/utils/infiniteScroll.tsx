"use client";

import { useState, useEffect, useTransition, useRef } from "react";
import { Spinner } from "@/components/loader/material-tailwind";
import PostCard from "@/components/organ/card/postCard";
import type { PostDataParams, TimeLine } from "@/interfaces/post";

export interface InfinityScrollContext {
  userId?: string;
  userIds?: string[];
}

export interface InfinityScrollProps {
  handler: (params: PostDataParams) => Promise<TimeLine[]>;
  initialState: TimeLine[];
  context?: InfinityScrollContext;
  className?: string;
}

export default function InfinityScroll({
  initialState,
  handler,
  context,
  className,
}: InfinityScrollProps) {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<TimeLine[]>(initialState);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entities) => {
        if (entities[0].isIntersecting)
          startTransition(async () => {
            if (data.length) {
              const posts = await handler({
                ...context,
                page: Math.floor(data.length / 20 + 1).toString(),
                limit: "20",
              });
              if (posts.length) setData((prev) => [...prev, ...posts]);
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
  }, [data]);

  return (
    <>
      <article
        id="scroll-section"
        className={`border border-white ${className}`}
      >
        {data.map((el) => (
          <PostCard key={el._id} post={el} />
        ))}
      </article>
      <div ref={ref}>
        {isPending && <Spinner className="h-4 w-4" color="blue" />}
      </div>
    </>
  );
}
