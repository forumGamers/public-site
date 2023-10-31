"use server";

import type { PostDataParams, TimeLine } from "@/interfaces/post";
import { Query } from ".";
import { GETTIMELINE } from "@/graphql/post";
import { getServerSideSession } from "@/helpers/session";

export const getTimeLine = async (query: PostDataParams) => {
  try {
    const { data, errors } = await Query<{ getTimeLine: TimeLine[] }>({
      query: GETTIMELINE,
      variables: {
        query,
      },
      context: {
        headers: {
          access_token: await getServerSideSession(),
        },
      },
    });

    return !data && errors?.length ? [] : data.getTimeLine;
  } catch (err) {
    return [];
  }
};
