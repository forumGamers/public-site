import CreatePostCard from "@/components/mollecul/form/createPost";
import InfinityScroll from "@/components/organ/utils/infiniteScroll";
import { getTimeLine } from "@/actions/post";
import { me } from "@/actions/user";
import { notFound } from "next/navigation";

export default async function Page() {
  const [data, user] = await Promise.all([getTimeLine({}), me()]);
  if (!user) notFound();

  return (
    <section className="flex flex-col items-center w-[47rem] min-h-screen">
      <CreatePostCard user={user} />
      <InfinityScroll handler={getTimeLine} initialState={data} />
    </section>
  );
}
