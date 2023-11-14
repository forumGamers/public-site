"use server";

import type { Comment, PostDataParams, TimeLine } from "@/interfaces/post";
import { Mutate, Query } from ".";
import {
  COMMENTAPOST,
  GETPOSTCOMMENT,
  GETTIMELINE,
  LIKEAPOST,
  UNLIKEAPOST,
} from "@/graphql/post";
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

export const getPostComment = async (
  id: string,
  param?: { page?: string; limit?: string }
) => {
  try {
    const { data, errors } = await Query<{ getPostComment: Comment[] }>({
      query: GETPOSTCOMMENT,
      context: {
        headers: {
          access_token: (await getServerSideSession())?.user?.access_token,
          v: true,
        },
      },
      variables: {
        getPostCommentId: encryption.encrypt(id),
        param,
      },
    });

    return !data && errors?.length ? [] : data.getPostComment;
  } catch (err) {
    return [];
  }
};

export const commentPost = async (text: string, postId: string) => {
  try {
    const { data, errors } = await Mutate<{ id: string }>({
      mutation: COMMENTAPOST,
      context: {
        headers: {
          access_token: (await getServerSideSession())?.user?.access_token,
          v: true,
        },
      },
      variables: {
        text: encryption.encrypt(text),
        postId: encryption.encrypt(postId),
      },
    });

    if (!data && errors?.length)
      return { success: false, message: errors[0].message, data: null };

    return { success: true, data, message: "OK" };
  } catch (err) {
    return { success: false, data: null, message: "Internal Server Error" };
  }
};
