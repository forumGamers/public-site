"use server";

import encryption from "@/utils/encryption";
import { Mutate } from ".";
import { GOOGLELOGIN, LOGIN } from "@/graphql/user";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { signIn } from "next-auth/react";
import type { CredentialResponse } from "@react-oauth/google";

export async function loginHandler(formData: FormData) {
  try {
    const email = encryption.encrypt(formData.get("email") as string);
    const password = encryption.encrypt(formData.get("password") as string);
    const tokenCaptcha = formData.get("g-recaptcha-response");

    const { data, errors } = await Mutate<{
      login: { access_token: string };
    }>({
      mutation: LOGIN,
      variables: {
        login: {
          email,
          password,
        },
      },
      context: {
        headers: {
          access_token: tokenCaptcha,
        },
      },
    });

    if (!data && errors?.length)
      redirect(`/auth/login?error=${errors[0].message}`, RedirectType.push);

    await signIn("credentials", { access_token: data?.login.access_token });

    redirect("/", RedirectType.replace);
  } catch (err) {
    redirect(`/auth/login?error=${err}`);
  }
}

export const googleLogin = async (response: CredentialResponse) => {
  try {
    const { data, errors } = await Mutate<{
      googleLogin: { access_token: string };
    }>({
      mutation: GOOGLELOGIN,
      context: {
        headers: {
          access_token: response.credential,
        },
      },
    });

    if (!data && errors?.length)
      redirect(`/auth/login?error=${errors[0].message}`, RedirectType.push);

    await signIn("credentials", {
      access_token: data?.googleLogin.access_token,
    });

    redirect("/", RedirectType.replace);
  } catch (err) {
    redirect(`/auth/login?error=${err}`);
  }
};