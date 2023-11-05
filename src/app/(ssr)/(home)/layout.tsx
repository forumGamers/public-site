import type { ChildrenProps } from "@/interfaces";

export type LayoutProps = ChildrenProps & {
  following: React.ReactNode;
  profile: React.ReactNode;
};

export default function Layout({ children, following, profile }: LayoutProps) {
  return (
    <main className="flex flex-row ml-10 mr-10 mt-[70px] mb-5 justify-between">
      <aside className="h-[35rem] w-80">{profile}</aside>
      {children}
      <aside className="h-[35rem] w-80 sticky">{following}</aside>
    </main>
  );
}
