"use client";

import { useState, useEffect, useTransition } from "react";
import { Spinner } from "@/components/loader/material-tailwind";
import PostCard from "@/components/organ/card/postCard";
import type { PostDataParams, TimeLine } from "@/interfaces/post";

export default function InfinityScroll({
  handler,
}: {
  handler: (params: PostDataParams) => Promise<TimeLine[]>;
}) {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<TimeLine[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<[number, string]>([0, ""]);
  const scrollSection =
    typeof document !== "undefined"
      ? (document.getElementById("scroll-section") as HTMLElement)
      : null;

  const fetchData = (params: PostDataParams) => {
    startTransition(async () => {
      setLoading(true);
      const posts = await handler(params);
      setData((prev) => [...prev, ...posts]);
      setPage(() => {
        const last = posts[posts.length - 1];
        return [last.searchAfterTimeStamp, last.searchAfterId];
      });
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData({});
  }, []);

  const handleScroll = () => {
    if (
      (scrollSection as HTMLElement).getBoundingClientRect().bottom <=
      window.innerHeight
    )
      fetchData({});
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <article id="scroll-section" className="border border-white">
        {data.map((el: TimeLine) => (
          <PostCard key={el._id} />
        ))}
      </article>
      {(loading || isPending) && <Spinner className="h-4 w-4" color="blue" />}
    </>
  );
}
