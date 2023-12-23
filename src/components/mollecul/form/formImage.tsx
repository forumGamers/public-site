"use client";

import type { ImageInput } from "@/interfaces";
import {
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
  useState,
} from "react";
import { LazyLoadImage } from "@/components/images/lazy-load-image";
import { Avatar } from "@/components/atom/avatar/material-tailwind";
import { Input } from "@/components/atom/form/material-tailwind";
import { blankBackground, defaultImgProfile } from "@/constants";
import LoadingOverlay from "@/components/loader/overlay";

export interface FormImageProps {
  type: "rounded" | "long";
  src: string;
  setNewImage: Dispatch<SetStateAction<ImageInput>>;
  id: string;
}

export default function FormImage({
  type,
  setNewImage,
  src,
  id,
}: FormImageProps) {
  const [progress, setProgress] = useState<number>(0);

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;
    if (files?.length && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onprogress = (ev) => {
        if (ev.lengthComputable) setProgress((ev.loaded / ev.total) * 100);
      };
     
      reader.onload = () => {
        setNewImage({
          file: files[0],
          fileReader: reader.result,
        });
      };
    }
  };

  return (
    <>
      <LoadingOverlay
        className={`overflow-hidden mx-auto w-32 h-32 mb-2 ${
          type === "rounded" ? "rounded-full" : "w-full"
        }`}
        spinner
        active={progress < 100 && progress !== 0}>
        <label htmlFor={`formImage-${id}`} className="cursor-pointer">
          {type === "rounded" ? (
            <Avatar
              src={src || defaultImgProfile}
              alt="Selected"
              className="w-full h-full object-cover"
              withBorder
              color="blue"
            />
          ) : (
            <LazyLoadImage
              className="w-full h-full object-cover"
              src={src || blankBackground}
              color="blue"
              alt="Selected"
            />
          )}
          <Input
            id={`formImage-${id}`}
            type="file"
            onChange={handler}
            className="hidden"
            name={id}
          />
          <div className="z-1000 absolute ml-12 top-7">
            <span
              className=" cursor-pointer text-white"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "5px",
              }}>
              Edit
            </span>
          </div>
          Choose File
        </label>
      </LoadingOverlay>
      <label className="flex justify-center text-blue-gray-700">
        {!!progress && `${progress.toString()}%`}
      </label>
    </>
  );
}
