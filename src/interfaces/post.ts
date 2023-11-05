export interface PostDataParams {
  page?: string;
  limit?: string;
}

export interface TimeLine {
  _id: string;
  userId: string;
  text: string;
  imageUrl: string;
  imageId: string;
  allowComment: boolean;
  CreatedAt: string;
  UpdatedAt: string;
  CountLike: number;
  CountComment: number;
  CountShare: number;
  searchAfterTimeStamp: number;
  searchAfterId: string;
  User: UserTimeLine;
  Media: PostMedia;
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
