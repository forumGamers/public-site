import type { DocumentNode } from "graphql";

export type BaseMutate = {
  mutation: DocumentNode;
  context?: Record<string, any>;
  variables?: any;
};

export type BaseQuery = {
  query: DocumentNode;
  context?: Record<string, any>;
  variables?: any;
};
