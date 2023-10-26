"use client";

import { Typography } from "@/components/atom/typography/typograph";

export type PostMediaProps = {
  type?: "image" | "video";
  url?: string;
  text: string;
  muted?: boolean;
};

export default function PostMedia({
  type,
  url,
  text,
  muted = false,
}: PostMediaProps) {
  return (
    <>
      <Typography variant="h6">{text}</Typography>
      {!!url && type === "image" ? (
        <figure>
          <img
            className="h-96 w-full rounded-lg object-cover object-center"
            src={url}
            alt="post image"
          />
        </figure>
      ) : (
        <video
          className="h-full w-full rounded-lg"
          controls
          autoPlay
          muted={muted}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
}
