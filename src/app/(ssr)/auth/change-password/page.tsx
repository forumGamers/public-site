import { Button } from "@/components/atom/button/material-tailwind";
import Form from "./form";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { USERCHANGEFORGETPASS } from "@/graphql/user";
import encryption from "@/utils/encryption";
import { Mutate } from "@/actions";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { token: access_token } = searchParams;
  if (!access_token) redirect("/auth/login", RedirectType.replace);

  const action = async (formData: FormData) => {
    "use server";
    try {
      const password = encryption.encrypt(formData.get("password") as string);
      const confirmPassword = encryption.encrypt(
        formData.get("confirmPassword") as string
      );

      const { data, errors } = await Mutate({
        mutation: USERCHANGEFORGETPASS,
        variables: {
          payload: {
            password,
            confirmPassword,
          },
        },
        context: {
          headers: {
            access_token,
          },
        },
      });

      if (!data && errors?.length)
        redirect(
          `/auth/change-password?error=${errors[0].message}`,
          RedirectType.push
        );

      redirect("/auth/login");
    } catch (err) {
      redirect(`/auth/change-password?error=${err}`);
    }
  };

  return (
    <section className="container">
      <form action={action}>
        <div className="login-input-wrapper mb-4">
          <div className="w-full">
            <Form />
          </div>
        </div>
        <Button
          type="submit"
          className="btn w-full text-white bg-blue-700 mb-2"
        >
          Submit
        </Button>
      </form>
    </section>
  );
}
