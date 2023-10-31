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
  createdAt: string;
  updatedAt: string;
  countLike: number;
  countComment: number;
  countShare: number;
  searchAfterTimeStamp: number;
  searchAfterId: string;
  User: UserTimeLine;
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
