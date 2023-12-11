import { getUserPost, getUserLikedPost, getUserMedia } from "@/actions/post";
import { getUserById } from "@/actions/user";
import UserPage from "@/components/organ/view/user";
import type { PageParams } from "@/interfaces";
import { notFound } from "next/navigation";

export default async function Page({ params: { id } }: PageParams) {
  const [posts, user] = await Promise.all([
    getUserPost({ userId: id }),
    getUserById(id),
  ]);

  if (!user) notFound();

  return (
    <UserPage
      user={user}
      tabs={[
        {
          name: "Post",
          data: posts,
          handler: getUserPost,
          context: { userId: user.id },
        },
        {
          name: "Liked",
          data: [],
          handler: getUserLikedPost,
          context: { userId: user.id },
        },
        {
          name: "Media",
          data: [],
          handler: getUserMedia,
          context: { userId: user.id },
        },
      ]}
    />
  );
}
