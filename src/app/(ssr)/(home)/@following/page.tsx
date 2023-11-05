import { followingRecomendation } from "@/actions/user";
import SuggestionCard from "@/components/mollecul/card/suggestionCard";

export default async function Page() {
  const data = await followingRecomendation();

  return (
    <article
      color="transparent"
      className="w-full max-w-[20rem] h-[30rem] p-3 mt-2 mb-3 overflow-y-scroll items-center"
      style={{ scrollbarWidth: "none" }}
      id="suggestion"
    >
      {data.length &&
        data.map((el) => (
          <SuggestionCard
            image_url={el.image_url}
            key={el.id}
            username={el.username}
          />
        ))}
    </article>
  );
}
