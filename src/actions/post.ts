"use server";

import type { PostDataParams, TimeLine } from "@/interfaces/post";
import { Mutate, Query } from ".";
import { GETTIMELINE, LIKEAPOST, UNLIKEAPOST } from "@/graphql/post";
import { getServerSideSession } from "@/helpers/session";
import encryption from "@/utils/encryption";
import type { MessageResponse } from "@/interfaces";

export const getTimeLine = async (query: PostDataParams) => {
  try {
    const access_token = (await getServerSideSession())?.user?.access_token;
    const { data, errors } = await Query<{ getTimeLine: TimeLine[] }>({
      query: GETTIMELINE,
      variables: {
        query,
      },
      context: {
        headers: {
          access_token,
        },
      },
    });
    return !data && errors?.length ? [] : data.getTimeLine;
  } catch (err) {
    return [];
  }
};

export const LikeAPost = async (id: string) => {
  try {
    const { data, errors } = await Mutate<MessageResponse>({
      mutation: LIKEAPOST,
      variables: {
        likeAPostId: encryption.encrypt(id),
      },
      context: {
        headers: {
          access_token: (await getServerSideSession())?.user?.access_token,
          v: true,
        },
      },
    });

    if (!data || errors?.length) return null;
    return data.message;
  } catch (err) {
    return null;
  }
};

export const UnLikeAPost = async (id: string) => {
  try {
    const { data, errors } = await Mutate<MessageResponse>({
      mutation: UNLIKEAPOST,
      variables: {
        unLikeAPostId: encryption.encrypt(id),
      },
      context: {
        headers: {
          access_token: (await getServerSideSession())?.user?.access_token,
          v: true,
        },
      },
    });

    return !data || errors?.length ? null : data.message;
  } catch (err) {
    return null;
  }
};
