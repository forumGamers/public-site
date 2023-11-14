import type { Session } from "next-auth";

export interface CustomSession extends Session {
  user?: {
    id?: number;
    name?: string | null;
    email?: string | null;
    access_token?: string | null;
    image?: string | null;
  };
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  title?: string;
  desc?: string;
  font?: string;
}

export interface MessageResponse {
  message: string;
}

export interface PageParams<T = { id: string }> {
  params: T;
}
