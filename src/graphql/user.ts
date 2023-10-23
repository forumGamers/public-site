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
