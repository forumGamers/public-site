import {
  Card,
  CardHeader,
  CardFooter,
} from "@/components/atom/card/material-tailwind";
import { Avatar } from "@/components/atom/avatar/material-tailwind";
import {
  PhotoIcon,
  VideoCameraIcon,
  CalendarDaysIcon,
} from "@/components/icons/heroIconsSolid";
import { Button } from "@/components/atom/button/material-tailwind";

export default function CreatePostCard({
  imageUrl = "/global/guest.svg",
}: {
  imageUrl?: string;
}) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full max-w-[75rem] p-3 mt-12 mb-3 bg-[#030712] border border-white/50"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="relative mx-0 flex bg-red items-start gap-3 mt-2 mb-3"
      >
        <Avatar
          variant="circular"
          alt="profile-picture"
          className="cursor-pointer"
          src={imageUrl}
        />
        <div className="flex w-full">
          <Button className="btn btn-ghost flex justify-start gap-1 text-white/50 border border-white/50 rounded-2xl w-full bg-transparent">
            <span style={{ textTransform: "none" }}>Start Create Post</span>
          </Button>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-row justify-between p-0">
        <Button className="btn btn-ghost gap-1 text-white/50 bg-transparent">
          <PhotoIcon className="h-6 w-6 text-[#EE2924]" />
          <span style={{ textTransform: "none" }}>Photo</span>
        </Button>

        <Button className="btn btn-ghost gap-1 text-white/50 bg-transparent">
          <VideoCameraIcon className="h-6 w-6 text-[#EE2924]" />
          <span style={{ textTransform: "none" }}>Video</span>
        </Button>

        <Button className="btn btn-ghost gap-1 text-white/50 bg-transparent">
          <CalendarDaysIcon className="h-6 w-6 text-[#EE2924]" />
          <span style={{ textTransform: "none" }}>Event</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
