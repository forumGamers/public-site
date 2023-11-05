"use client";

import { Card, CardBody } from "@/components/atom/card/material-tailwind";
import { Avatar } from "@/components/atom/avatar/material-tailwind";
import { Typography } from "@/components/atom/typography/typograph";
import ButtonProggres from "@/components/atom/button/buttonProgress";
import { defaultImgProfile } from "@/constants";

export type SuggestionCardProps = {
  image_url?: string;
  username: string;
};

export default function SuggestionCard({
  image_url,
  username,
}: SuggestionCardProps) {
  return (
    <Card className="flex flex-1 flex-row justify-between w-full p-2 bg-blue-gray-700 m-2">
      <CardBody className="flex flex-1 flex-row justify-between gap-2">
        <Avatar
          variant="circular"
          alt="profile-picture"
          className="cursor-pointer w-12 h-12"
          src={image_url || defaultImgProfile}
        />
        <div className="flex flex-col">
          <Typography className="text-sm font-semibold text-white mt-4 bold">
            {username}
          </Typography>
        </div>
        <ButtonProggres className="btn btn-ghost bg-[#D9D9D9] text-[#16181C] text-sm rounded-full w-[5rem]">
          <span style={{ textTransform: "none" }}>Follow</span>
        </ButtonProggres>
      </CardBody>
    </Card>
  );
}
