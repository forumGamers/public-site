"use server";

import type {
  Comment,
  CommentResult,
  PostDataParams,
  TimeLine,
} from "@/interfaces/post";
import { Mutate, Query } from ".";
import {
  COMMENTAPOST,
  GETMYLIKEDPOST,
  GETMYMEDIA,
  GETMYPOST,
  GETPOSTCOMMENT,
  GETTIMELINE,
  GETUSERLIKEDPOST,
  GETUSERMEDIA,
  GETUSERPOST,
  LIKEAPOST,
  REPLYCOMMENT,
  UNLIKEAPOST,
} from "@/graphql/post";
import { getServerSideSession } from "@/helpers/session";
import encryption from "@/utils/encryption";
import type { MessageResponse } from "@/interfaces";
import { me } from "./user";
import type { UserData } from "@/interfaces/user";

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

export const commentPost = async (
  text: string,
  postId: string
): Promise<CommentResult> => {
  try {
    const [{ data, errors }, user] = await Promise.all([
      await Mutate<{ id: string }>({
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
      }),
      me(),
    ]);

    if (!data && errors?.length)
      return { success: false, message: errors[0].message, data: null };

    return {
      success: true,
      data: { id: (data as { id: string }).id, user: user as UserData },
      message: "OK",
    };
  } catch (err) {
    return { success: false, data: null, message: "Internal Server Error" };
  }
};

export const ReplyComment = async (
  text: string,
  commentId: string
): Promise<CommentResult> => {
  try {
    const [{ data, errors }, user] = await Promise.all([
      Mutate<{ id: string }>({
        mutation: REPLYCOMMENT,
        context: {
          headers: {
            access_token: (await getServerSideSession())?.user?.access_token,
            v: true,
          },
        },
        variables: {
          text: encryption.encrypt(text),
          commentId: encryption.encrypt(commentId),
        },
      }),
      me(),
    ]);

    if (!data && errors?.length)
      return { success: false, message: errors[0].message, data: null };

    return {
      success: true,
      data: { id: (data as { id: string }).id, user: user as UserData },
      message: "OK",
    };
  } catch (err) {
    return { success: false, data: null, message: "Internal Server Error" };
  }
};

export const getMyPost = async (query: PostDataParams) => {
  try {
    const access_token = (await getServerSideSession())?.user?.access_token;
    const { data, errors } = await Query<{ getMyPost: TimeLine[] }>({
      query: GETMYPOST,
      variables: {
        query,
      },
      context: {
        headers: {
          access_token,
        },
      },
    });
    return !data && errors?.length ? [] : data.getMyPost;
  } catch (err) {
    return [];
  }
};

export const getUserPost = async (param: PostDataParams = { userId: "-" }) => {
  try {
    const userId = param.userId;
    delete param.userId;

    const access_token = (await getServerSideSession())?.user?.access_token;
    const { data, errors } = await Query<{ getUserPost: TimeLine[] }>({
      query: GETUSERPOST,
      variables: {
        param,
        userId,
      },
      context: {
        headers: {
          access_token,
        },
      },
    });

    return !data && errors?.length ? [] : data.getUserPost;
  } catch (err) {
    return [];
  }
};

export const getMyLikedPost = async (query: PostDataParams) => {
  try {
    const access_token = (await getServerSideSession())?.user?.access_token;
    const { data, errors } = await Query<{ getMyLikedPost: TimeLine[] }>({
      query: GETMYLIKEDPOST,
      variables: {
        query,
      },
      context: {
        headers: {
          access_token,
        },
      },
    });
    return !data && errors?.length ? [] : data.getMyLikedPost;
  } catch (err) {
    return [];
  }
};

export const getUserLikedPost = async (
  param: PostDataParams = { userId: "-" }
) => {
  try {
    const userId = param.userId;
    delete param.userId;

    const access_token = (await getServerSideSession())?.user?.access_token;
    const { data, errors } = await Query<{ getUserLikedPost: TimeLine[] }>({
      query: GETUSERLIKEDPOST,
      variables: {
        param,
        userId,
      },
      context: {
        headers: {
          access_token,
        },
      },
    });
    return !data && errors?.length ? [] : data.getUserLikedPost;
  } catch (err) {
    return [];
  }
};

export const getMyMedia = async (query: PostDataParams) => {
  try {
    const access_token = (await getServerSideSession())?.user?.access_token;
    const { data, errors } = await Query<{ getMedia: TimeLine[] }>({
      query: GETMYMEDIA,
      variables: {
        query,
      },
      context: {
        headers: {
          access_token,
        },
      },
    });
    return !data && errors?.length ? [] : data.getMedia;
  } catch (err) {
    return [];
  }
};

export const getUserMedia = async (param: PostDataParams = { userId: "-" }) => {
  try {
    const userId = param.userId;
    delete param.userId;

    const access_token = (await getServerSideSession())?.user?.access_token;
    const { data, errors } = await Query<{ getUserMedia: TimeLine[] }>({
      query: GETUSERMEDIA,
      variables: {
        param,
        userId,
      },
      context: {
        headers: {
          access_token,
        },
      },
    });
    return !data && errors?.length ? [] : data.getUserMedia;
  } catch (err) {
    return [];
  }
};
