import { me } from "@/actions/user";
import ProfileCard from "@/components/mollecul/card/profileCard";
import type { UserData } from "@/interfaces/user";

export default async function Page() {
  const user = (await me()) as UserData;

  return <ProfileCard {...user} />;
}
