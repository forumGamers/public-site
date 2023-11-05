"use client";

import { useState, useEffect, useTransition, useRef } from "react";
import { Spinner } from "@/components/loader/material-tailwind";
import PostCard from "@/components/organ/card/postCard";
import type { PostDataParams, TimeLine } from "@/interfaces/post";

export interface InfinityScrollProps {
  handler: (params: PostDataParams) => Promise<TimeLine[]>;
  initialState: TimeLine[];
}

export default function InfinityScroll({
  initialState,
  handler,
}: InfinityScrollProps) {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<TimeLine[]>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entities) => {
        if (entities[0].isIntersecting) {
          startTransition(async () => {
            setLoading(true);
            const last = data[data.length - 1];
            const posts = await handler({
              page: `${last.searchAfterTimeStamp},${last.searchAfterId}`,
            });
            if (posts.length) {
              setData((prev) => [...prev, ...posts]);
            }
            setLoading(false);
          });
        }
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
      <article id="scroll-section" className="border border-white">
        {data.map((el: TimeLine) => (
          <PostCard key={el._id} post={el} />
        ))}
      </article>
      <div ref={ref}>
        {(loading || isPending) && <Spinner className="h-4 w-4" color="blue" />}
      </div>
    </>
  );
}
