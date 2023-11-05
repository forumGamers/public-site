"use server";

import encryption from "@/utils/encryption";
import { Mutate, Query } from ".";
import {
  FOLLOWINGRECOMMENDATION,
  GOOGLELOGIN,
  LOGIN,
  ME,
  REGISTER,
  USERRESETPASSWORD,
} from "@/graphql/user";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import type { CredentialResponse } from "@react-oauth/google";
import { getServerSideSession } from "@/helpers/session";
import type { UserData } from "@/interfaces/user";

export async function loginHandler(formData: FormData) {
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
        v: true,
      },
    },
  });

  if (!data && errors?.length)
    redirect(`/auth/login?error=${errors[0].message}`, RedirectType.push);

  redirect(
    `/auth/login?token=${data?.login.access_token}`,
    RedirectType.replace
  );
}

export async function googleLogin(response: CredentialResponse) {
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

    redirect(
      `/auth/login?token=${data?.googleLogin.access_token}`,
      RedirectType.replace
    );
  } catch (err) {
    redirect(`/auth/login?error=${err}`);
  }
}

export async function forgetPassword(formData: FormData) {
  try {
    const email = encryption.encrypt(formData.get("email") as string);

    const { data, errors } = await Mutate({
      mutation: USERRESETPASSWORD,
      variables: {
        email,
      },
      context: {
        headers: {
          v: true,
        },
      },
    });

    if (!data && errors?.length)
      redirect(
        `/auth/forget-password?error=${errors[0].message}`,
        RedirectType.push
      );

    redirect("/auth/login");
  } catch (err) {
    redirect(`/auth/forget-password?error=${err}`);
  }
}

export async function registerHandler(formData: FormData) {
  try {
    const email = encryption.encrypt(formData.get("email") as string);
    const password = encryption.encrypt(formData.get("password") as string);
    const fullname = encryption.encrypt(formData.get("fullname") as string);
    const username = encryption.encrypt(formData.get("username") as string);

    const { data, errors } = await Mutate({
      mutation: REGISTER,
      variables: {
        register: {
          email,
          password,
          fullname,
          username,
        },
      },
    });

    if (!data && errors?.length)
      redirect(`/auth/register?error=${errors[0].message}`, RedirectType.push);

    redirect("/auth/login");
  } catch (err) {
    redirect(`/auth/register?error=${err}`);
  }
}

export async function me() {
  const { data, errors } = await Query<{ getUserByToken: UserData }>({
    query: ME,
    context: {
      headers: {
        access_token: (await getServerSideSession())?.user?.access_token,
      },
    },
  });

  return !data && errors?.length ? null : data.getUserByToken;
}

export async function followingRecomendation() {
  const { data, errors } = await Query<{
    getFollowingRecomendation: UserData[];
  }>({
    query: FOLLOWINGRECOMMENDATION,
    context: {
      headers: {
        access_token: (await getServerSideSession())?.user?.access_token,
      },
    },
  });

  return !data && errors?.length ? [] : data.getFollowingRecomendation;
}
