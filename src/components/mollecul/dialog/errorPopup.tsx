"use client";

import type { Dispatch, SetStateAction } from "react";
import PopUp from "@/components/atom/dialog/popup";
import { Typography } from "@/components/mollecul/typography/typograph";
import ErrorSvg from "@/components/images/errorSvg";
import { Button } from "@/components/atom/button/material-tailwind";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@/components/atom/dialog/material-tailwind";

export interface ErrorPopup {
  handler: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  name?: string;
  message: string;
}

export default function ErrorAlert({
  handler,
  open,
  name = "Error",
  message,
}: ErrorPopup) {
  return (
    <PopUp handler={handler} open={open}>
      <DialogHeader>
        <Typography variant="h5" color="blue-gray">
          {name}
        </Typography>
      </DialogHeader>
      <DialogBody className=" justify-center items-center m-auto">
        <ErrorSvg />
        {message}
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button
          variant="text"
          color="blue-gray"
          onClick={() => {
            handler(!open);
          }}
        >
          close
        </Button>
        <Button
          variant="gradient"
          onClick={() => {
            handler(!open);
          }}
        >
          Ok, Got it
        </Button>
      </DialogFooter>
    </PopUp>
  );
}
