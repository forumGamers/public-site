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

export const GETPOSTCOMMENT = gql`
  query Query($getPostCommentId: String!, $param: Params) {
    getPostComment(id: $getPostCommentId, param: $param) {
      CreatedAt
      UpdatedAt
      Reply {
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
        commentId
        text
        userId
      }
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
      postId
      text
      userId
      searchAfterId
      searchAfterTimeStamp
    }
  }
`;

export const COMMENTAPOST = gql`
  mutation Mutation($text: String!, $postId: String!) {
    commentAPost(text: $text, postId: $postId) {
      id
      message
    }
  }
`;

export const REPLYCOMMENT = gql`
  mutation Mutation($text: String!, $commentId: String!) {
    replyComment(text: $text, commentId: $commentId) {
      id
      message
    }
  }
`;
