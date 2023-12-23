import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@/components/atom/card/material-tailwind";
import { Avatar } from "@/components/atom/avatar/material-tailwind";
import { Typography } from "@/components/atom/typography/typograph";
import { Button } from "@/components/atom/button/material-tailwind";
import { defaultImgProfile } from "@/constants";
import Link from "next/link";

export type ProfileCardProps = {
  id: string;
  username: string;
  bio: string;
  fullname: string;
  image_url: string;
};

export default function ProfileCard({
  username,
  bio,
  fullname,
  image_url,
  id,
}: ProfileCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full max-w-[20rem] h-[25.3rem] p-3 mt-12 mb-3 bg-[#030712] border border-white/50"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-auto"
      >
        <Avatar
          src={image_url || defaultImgProfile}
          variant="circular"
          alt="profile-picture"
          className="cursor-pointer w-24 h-24"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-col justify-between items-center w-full">
          <Typography className="text-lg font-semibold text-white">
            {fullname}
          </Typography>
          <Typography>{username}</Typography>
          <Typography className="text-white text-center mt-3">{bio}</Typography>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-center">
        <Button className="btn btn-ghost bg-[#D9D9D9] gap-1 text-[#16181C] border border-white/50 rounded-full w-[8rem] px-4 py-2">
          <span style={{ textTransform: "none" }}>See Profile</span>
          <Link href={`/user/${id}`} prefetch />
        </Button>
      </CardFooter>
    </Card>
  );
}
