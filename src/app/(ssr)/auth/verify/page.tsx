import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import "./styles.css";
import ButtonBack from "./buttonBack";
import { Mutate } from "@/actions";
import { VERIFYUSER } from "@/graphql/user";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { token, error } = searchParams;
  if (!token && !error) redirect("/auth/login", RedirectType.replace);

  async function verifyUser() {
    "use server";
    try {
      const { data, errors } = await Mutate({
        mutation: VERIFYUSER,
        variables: {
          token: {
            token,
          },
        },
      });

      if (!data && errors?.length)
        redirect(`/auth/verify?error=${errors[0].message}`, RedirectType.push);

      return;
    } catch (err) {
      redirect(`/auth/verify?error=${err}`);
    }
  }

  return (
    <main className="body bg-blue-700 text-blue-gray-900">
      <h1>Congratulations, Your account has been actived</h1>
      <p>Thanks for using our service</p>
      <ButtonBack handler={verifyUser} />
    </main>
  );
}
