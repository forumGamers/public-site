import dinamic from "next/dynamic";
import Loader from "@/components/loader/loader";
import type { PageParams } from "@/interfaces";
import { getPostComment } from "@/actions/post";
const Modal = dinamic(() => import("@/components/atom/dialog/longModal"), {
  loading: () => <Loader />,
});
import CommentSection from "@/components/organ/card/commentCard";

export default async function Page({ params }: PageParams) {
  const data = await getPostComment(params.id);
  return (
    <Modal title="Comment">
      <CommentSection comments={data} />
    </Modal>
  );
}
