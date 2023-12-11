import type { ChildrenProps } from "@/interfaces";

export type UserLayoutProps = ChildrenProps;

export default function Layout({ children }: UserLayoutProps) {
  return <main className="container">{children}</main>;
}
