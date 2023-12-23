"use client";

import dinamic from "next/dynamic";
import Loader from "@/components/loader/loader";
const Popup = dinamic(() => import("@/components/atom/dialog/popup"), {
  loading: () => <Loader />,
});
import type { UserData } from "@/interfaces/user";
import { type Dispatch, type SetStateAction, useState } from "react";
import { Input } from "@/components/atom/form/material-tailwind";
import type { ImageInput } from "@/interfaces";
import FormImage from "@/components/mollecul/form/formImage";
import { Typography } from "@/components/atom/typography/typograph";
import { Button } from "@/components/atom/button/material-tailwind";
import { updateProfile } from "@/actions/user";

export interface EditProfileProps {
  user: UserData;
  open: boolean;
  handler: Dispatch<SetStateAction<boolean>>;
}

export type state = {
  username: string;
  bio: string;
};

export default function EditProfile({ user, open, handler }: EditProfileProps) {
  const [newImage, setNewImage] = useState<ImageInput>(null);
  const [newBg, setNewBg] = useState<ImageInput>(null);
  const [data, setData] = useState<state>({
    username: user.username,
    bio: user.bio,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: state) => ({
      ...prev,
      [name]: value,
    }));
  };

  const actionHandler = async (formData: FormData) => {
    if (newImage?.fileReader)
      formData.append("profileImg", newImage.fileReader as string);
    if (newBg?.fileReader)
      formData.append("backgroundImg", newBg.fileReader as string);
    updateProfile(formData).then(() => {
      window.location.reload();
    });
  };

  return (
    <Popup open={open} handler={handler}>
      <form action={actionHandler}>
        <div className="mb-4 m-4 p-px flex flex-col gap-6">
          <FormImage
            id="bgForm"
            src={(newBg?.fileReader as string) || user.background_url}
            type="long"
            setNewImage={setNewBg}
          />
          <FormImage
            id="imgForm"
            src={(newImage?.fileReader as string) || user.image_url}
            type="rounded"
            setNewImage={setNewImage}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Username
          </Typography>
          <Input
            size="lg"
            name="username"
            onChange={handleChange}
            placeholder={data.username}
            value={data.username}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Bio
          </Typography>
          <Input
            size="lg"
            name="bio"
            onChange={handleChange}
            placeholder={data.bio || "your cool bio"}
            value={data.bio}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Button type="submit" className="items-center justify-center">
            Submit
          </Button>
        </div>
      </form>
    </Popup>
  );
}
