import type { ChildrenProps } from "@/interfaces";

export default function Layout({ children }: ChildrenProps) {
  return (
    <main className="flex flex-row ml-10 mr-10 mt-[70px] mb-5 justify-between">
      <aside className="h-[35rem] w-80">{/* ProfileCard */}</aside>
      {children}
      <aside className="h-[35rem] w-80">{/* FollowCard */}</aside>
    </main>
  );
}
