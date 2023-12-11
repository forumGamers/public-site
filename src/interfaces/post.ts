import type { UserData } from "./user";

export interface PostDataParams {
  page?: string;
  limit?: string;
  userId?: string;
}

export interface TimeLine {
  _id: string;
  userId: string;
  text: string;
  imageUrl: string;
  imageId: string;
  allowComment: boolean;
  createdAt: string;
  updatedAt: string;
  countLike: number;
  countComment: number;
  countShare: number;
  User: UserTimeLine;
  media: PostMedia;
  isLiked: boolean;
  isShared: boolean;
  tags: string[];
}

export interface PostMedia {
  id: string;
  type: "image" | "video";
  url: string;
}

export interface UserTimeLine {
  id: string;
  imageUrl: string;
  UUID: string;
  username: string;
  bio: string;
  isfollowed: boolean;
  backgroundImage: string;
}

export interface Comment {
  _id: string;
  userId: string;
  text: string;
  postId: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  Reply: Reply[];
  User: UserTimeLine;
  searchAfterTimeStamp: number;
  searchAfterId: string;
}

export interface Reply {
  _id: string;
  userId: string;
  text: string;
  CommentId: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  User: UserTimeLine;
}

export interface CommentResult {
  success: boolean;
  message: string;
  data?: { id: string; user: UserData } | null;
}
