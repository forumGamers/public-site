import type { ChildrenProps } from "@/interfaces";
import { Button } from "./material-tailwind";

export default function ButtonRounded({ children }: ChildrenProps) {
  return (
    <Button className="!text-gray-100 p-[5px] bg-black-900 text-white-A700 absolute border border-gray-500 border-solid rounded-[10px] bottom-[10%] cursor-pointer font-semibold h-[25px] leading-[normal] right-[5%] text-[10px] text-center w-[94px]">
      {children}
    </Button>
  );
}
