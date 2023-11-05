"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@/components/atom/popover/material-tailwind";
import { Avatar } from "@/components/atom/avatar/material-tailwind";
import { Typography } from "@/components/atom/typography/typograph";
import LoadingOverlay from "@/components/loader/overlay";
import ButtonClickRipple from "@/components/atom/button/buttonClickRipple";
import { defaultImgProfile } from "@/constants";

export interface AvatarProfileProps {
  imageUrl: string;
  UUID: string;
  username: string;
  bio: string;
  backgroundImage: string;
}

export default function AvatarProfile({ user }: { user: AvatarProfileProps }) {
  const { imageUrl, UUID, username, bio, backgroundImage } = user;

  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const triggers = {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
  };

  return (
    <Popover open={open} handler={setOpen}>
      <PopoverHandler {...triggers}>
        <div className="flex items-center gap-4">
          <Avatar
            src={imageUrl || defaultImgProfile}
            variant="circular"
            alt="profile-picture"
            className="cursor-pointer"
            onClick={() => {
              router.prefetch(`/user/${UUID}`);
            }}
          />
          <Typography variant="h6">{username}</Typography>
        </div>
      </PopoverHandler>
      <PopoverContent
        className="z-50 max-w-[24rem] mb-2 relative"
        {...triggers}
      >
        <div
          className="mb-2 flex items-center gap-4 bg-cover bg-no-repeat bg-top z-[-1] pt-[25%] top-0 left-0 right-0 bottom-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Avatar
            src={imageUrl}
            variant="circular"
            alt="profile-picture"
            className="cursor-pointer"
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 flex items-center gap-2 font-medium"
          >
            {username}
          </Typography>
          <LoadingOverlay spinner active={false}>
            <ButtonClickRipple handler={async () => {}} filled={true}>
              <Typography variant="h6">
                {true ? "UnFollow" : "Follow"}
              </Typography>
            </ButtonClickRipple>
          </LoadingOverlay>
        </div>
        <Typography variant="h6">{bio || ""}</Typography>
      </PopoverContent>
    </Popover>
  );
}
