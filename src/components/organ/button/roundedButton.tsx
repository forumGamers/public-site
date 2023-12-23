"use client";

import { Button } from "../../atom/button/material-tailwind";
import { useState, type MouseEvent } from "react";
import EditProfile from "../form/editProfile";
import type { UserData } from "@/interfaces/user";

export interface ButtonEditProfileProps {
  user: UserData;
}

export default function ButtonEditProfile({ user }: ButtonEditProfileProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setOpen(!open);
  };

  return (
    <>
      <Button
        className="!text-gray-100 p-[5px] bg-black-900 text-white-A700 absolute border border-gray-500 border-solid rounded-[10px] bottom-[10%] cursor-pointer font-semibold h-[25px] leading-[normal] right-[5%] text-[10px] text-center w-[94px]"
        onClick={handleClick}
      >
        Edit Profile
      </Button>
      <EditProfile user={user} open={open} handler={setOpen} />
    </>
  );
}
