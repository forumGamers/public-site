"use client";

import AvatarProfile, {type AvatarProfileProps} from "@/components/mollecul/avatar/profile";
import { EllipsisVerticalIcon } from "@/components/icons/heroIconsOutline";
import { Button } from "@/components/atom/button/material-tailwind";
import { CardHeader } from "@/components/atom/card/material-tailwind";

export default function PostHeader({ user }: { user: AvatarProfileProps }) {
  return (
    <CardHeader
      color="transparent"
      floated={false}
      shadow={false}
      className="relative mx-0 flex bg-red items-start gap-3 mt-2 mb-2 text-white"
    >
      <section className="flex w-full flex-col gap-0.5">
        <div className="flex flex-row">
          <AvatarProfile user={user} />
          <div className="flex justify-end items-center flex-grow bottom-full z-10">
            <div className="dropdown dropdown-left">
              <Button className="btn btn-ghost btn-circle m-1" tabIndex={0}>
                <EllipsisVerticalIcon className="h-6 w-6 text-white" />
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow-lg bg-ghost rounded-box w-52"
                >
                  <li>
                    <a>Edit</a>
                  </li>
                </ul>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </CardHeader>
  );
}
