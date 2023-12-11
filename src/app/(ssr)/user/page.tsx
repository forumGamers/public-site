import { me } from "@/actions/user";
import UserPage from "@/components/organ/view/user";
import { notFound } from "next/navigation";
import { getMyPost, getMyLikedPost, getMyMedia } from "@/actions/post";

export default async function Page() {
  const [data, user] = await Promise.all([getMyPost({}), me()]);
  if (!user) notFound();

  return (
    <UserPage
      user={user}
      tabs={[
        {
          name: "Post",
          data,
          handler: getMyPost,
        },
        {
          name: "Liked",
          data: [],
          handler: getMyLikedPost,
        },
        {
          name: "Media",
          data: [],
          handler: getMyMedia,
        },
      ]}
    />
  );
}
