import type { ChildrenProps } from "@/interfaces";
import SSRLayout from "@/layouts/ssrLayout";

export default function Layout({ children }: ChildrenProps) {
  return <SSRLayout>{children}</SSRLayout>;
}
