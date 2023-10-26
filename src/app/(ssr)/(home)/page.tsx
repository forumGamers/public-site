import CreatePostCard from "@/components/mollecul/form/createPost";
import InfinityScroll from "./infiniteScroll";

export default function Page() {
  return (
    <section className="flex flex-col items-center w-[47rem] min-h-screen">
      <CreatePostCard />
      <InfinityScroll
        handler={async () => {
          "use server";
         
          return;
        }}
      />
    </section>
  );
}
