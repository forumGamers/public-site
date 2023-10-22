import type { ChildrenProps } from "@/interfaces";
import SeoLayout from "@/layouts/seoLayout";

export default function Layout({ children }: ChildrenProps) {
  return <SeoLayout>{children}</SeoLayout>;
}
