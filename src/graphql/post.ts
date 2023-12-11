import { gql } from "@apollo/client";

export const GETTIMELINE = gql`
  query GetTimeLine($query: timeLineParams) {
    getTimeLine(query: $query) {
      media {
        id
        type
        url
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
      allowComment
      isLiked
      isShared
      privacy
      tags
      text
      userId
      countComment
      countLike
      countShare
      createdAt
      updatedAt
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

export const GETMYPOST = gql`
  query GetMyPost($query: timeLineParams) {
    getMyPost(query: $query) {
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
      countComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      updatedAt
      userId
    }
  }
`;

export const GETMYMEDIA = gql`
  query GetMedia($query: timeLineParams) {
    getMedia(query: $query) {
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
      countComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      text
      privacy
      tags
      updatedAt
      userId
    }
  }
`;

export const GETMYLIKEDPOST = gql`
  query GetMyLikedPost($query: timeLineParams) {
    getMyLikedPost(query: $query) {
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
      countComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      updatedAt
      userId
    }
  }
`;

export const GETUSERPOST = gql`
  query Query($userId: String!, $param: Params) {
    getUserPost(userId: $userId, param: $param) {
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
      countLike
      countComment
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        url
        type
      }
      privacy
      tags
      text
      updatedAt
      userId
    }
  }
`;

export const GETUSERMEDIA = gql`
  query GetUserMedia($userId: String!, $param: Params) {
    getUserMedia(userId: $userId, param: $param) {
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
      countComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      userId
      updatedAt
    }
  }
`;

export const GETUSERLIKEDPOST = gql`
  query GetUserLikedPost($userId: String!, $param: Params) {
    getUserLikedPost(userId: $userId, param: $param) {
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
      countComment
      allowComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      userId
      updatedAt
    }
  }
`;
