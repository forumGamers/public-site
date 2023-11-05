import type { ChildrenProps } from "@/interfaces";
import { Button } from "./material-tailwind";
import "@/components/styles/atom/suggesstionCard.css";

export type ButtonProggresProps = ChildrenProps & {
  className?: string;
};

export default function ButtonProggres({
  className = "btn btn-ghost bg-[#D9D9D9] text-[#16181C] text-sm rounded-full w-[5rem]",
  children,
}: ButtonProggresProps) {
  return (
    <Button id="button-proggres" className={className}>
      {children}
    </Button>
  );
}
