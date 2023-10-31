"use server";

import type { BaseMutate, BaseQuery } from "@/interfaces/actions";
import { client } from "@/lib/apolloClient";
import type { FetchResult, ApolloQueryResult } from "@apollo/client";

export const Mutate = async <T = any>(
  mutationObj: BaseMutate
): Promise<FetchResult<T>> =>
  await client.mutate<T>({
    ...mutationObj,
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

export const Query = async <T = any>(
  queryObj: BaseQuery
): Promise<ApolloQueryResult<T>> =>
  await client.query<T>({
    ...queryObj,
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });
