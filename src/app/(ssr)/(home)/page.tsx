import CreatePostCard from "@/components/mollecul/form/createPost";
import InfinityScroll from "./infiniteScroll";
import { getTimeLine } from "@/actions/post";
import { me } from "@/actions/user";
import type { UserData } from "@/interfaces/user";

export default async function Page() {
  const [data, user] = await Promise.all([getTimeLine({}), me()]);
  return (
    <section className="flex flex-col items-center w-[47rem] min-h-screen">
      <CreatePostCard user={user as UserData} />
      <InfinityScroll handler={getTimeLine} initialState={data} />
    </section>
  );
}
