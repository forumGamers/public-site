"use client";

import { Dialog } from "@material-tailwind/react";
import type { Dispatch, SetStateAction } from "react";

export interface BasePopup {
  children: React.ReactNode;
  handler: Dispatch<SetStateAction<any>>;
  open: boolean;
}

export default function PopUp({ children, handler, open }: BasePopup) {
  return (
    <Dialog
      open={open}
      handler={handler}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      size="lg"
    >
      {children}
    </Dialog>
  );
}
