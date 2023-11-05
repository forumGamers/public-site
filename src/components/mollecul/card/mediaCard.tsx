"use client";

import { Typography } from "@/components/atom/typography/typograph";
import type { PostMedia } from "@/interfaces/post";

export type PostMediaProps = {
  text: string;
  media?: PostMedia;
  muted?: boolean;
};

function HandleMedia(type: "image" | "video", url: string, muted = false) {
  switch (type) {
    case "image":
      return (
        <figure>
          <img
            className="h-96 w-full rounded-lg object-cover object-center"
            src={url}
            alt="post image"
          />
        </figure>
      );
    case "video":
      return (
        <video
          className="h-full w-full rounded-lg"
          controls
          autoPlay
          muted={muted}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
  }
}

export default function PostMedia({
  text,
  muted = false,
  media,
}: PostMediaProps) {
  return (
    <>
      <Typography variant="h6">{text}</Typography>
      {media && HandleMedia(media.type, media.url, muted)}
    </>
  );
}
