import CreatePostCard from "@/components/mollecul/form/createPost";
import InfinityScroll from "./infiniteScroll";
import { getTimeLine } from "@/actions/post";

export default function Page() {
  return (
    <section className="flex flex-col items-center w-[47rem] min-h-screen">
      <CreatePostCard />
      <InfinityScroll handler={getTimeLine} />
    </section>
  );
}
