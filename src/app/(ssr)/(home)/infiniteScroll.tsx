"use client";

import { useState, useEffect, useTransition } from "react";
import { Spinner } from "@/components/loader/material-tailwind";
import PostCard from "@/components/organ/card/postCard";

export default function InfinityScroll({
  handler,
}: {
  handler: () => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const scrollSection =
    typeof document !== "undefined"
      ? (document.getElementById("scroll-section") as HTMLElement)
      : null;

  const fetchData = () => {
    startTransition(async () => {
      setLoading(true);
      await handler();
      setPage((prev) => prev + 1);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      (scrollSection as HTMLElement).getBoundingClientRect().bottom <=
      window.innerHeight
    )
      fetchData();
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
        {data.map((el: any) => (
          <PostCard key={el._id} />
        ))}
      </article>
      {(loading || isPending) && <Spinner className="h-4 w-4" color="blue" />}
    </>
  );
}
