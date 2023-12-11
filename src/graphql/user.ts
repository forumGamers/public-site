import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($register: registerInput!) {
    register(register: $register) {
      message
    }
  }
`;

export const LOGIN = gql`
  mutation Login($login: loginInput!) {
    login(login: $login) {
      access_token
    }
  }
`;

export const GOOGLELOGIN = gql`
  mutation GoogleLogin {
    googleLogin {
      access_token
    }
  }
`;

export const USERRESETPASSWORD = gql`
  mutation Mutation($email: String!) {
    resetPassword(email: $email) {
      message
    }
  }
`;

export const USERCHANGEFORGETPASS = gql`
  mutation Mutation($payload: forgetPass!) {
    changeForgetPassword(payload: $payload) {
      message
    }
  }
`;

export const VERIFYUSER = gql`
  mutation VerifyUser($token: tokenVerification!) {
    verifyUser(token: $token) {
      message
    }
  }
`;

export const ME = gql`
  query GetUserByToken {
    getUserByToken {
      background_id
      background_url
      bio
      created_at
      division
      email
      followers
      following
      fullname
      id
      image_id
      image_url
      is_verified
      role
      status
      token_as
      updated_at
      username
    }
  }
`;

export const FOLLOWINGRECOMMENDATION = gql`
  query GetFollowingRecomendation {
    getFollowingRecomendation {
      background_id
      background_url
      bio
      division
      created_at
      email
      followers
      following
      fullname
      id
      image_id
      image_url
      is_verified
      role
      status
      token_as
      updated_at
      username
    }
  }
`;

export const GETUSERBYID = gql`
  query Query($userId: String!) {
    getUserById(userId: $userId) {
      background_id
      background_url
      bio
      created_at
      division
      email
      followers
      following
      id
      fullname
      image_id
      image_url
      is_verified
      token_as
      status
      role
      updated_at
      username
    }
  }
`;
