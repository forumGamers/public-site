import { gql } from "@apollo/client";

export const GETTIMELINE = gql`
  query GetTimeLine($query: timeLineParams) {
    getTimeLine(query: $query) {
      CountComment
      CountLike
      CountShare
      Media {
        id
        type
        url
      }
      CreatedAt
      UpdatedAt
      User {
        UUID
        backgroundImage
        bio
        id
        imageUrl
        isfollowed
        username
      }
      _id
      allowComment
      isLiked
      isShared
      privacy
      searchAfterId
      searchAfterTimeStamp
      tags
      text
      userId
    }
  }
`;

export const LIKEAPOST = gql`
  mutation Mutation($likeAPostId: String!) {
    likeAPost(id: $likeAPostId) {
      message
    }
  }
`;

export const UNLIKEAPOST = gql`
  mutation Mutation($unLikeAPostId: String!) {
    unLikeAPost(id: $unLikeAPostId) {
      message
    }
  }
`;
