import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      account {
        _id
        username
      }
    }
  }
`;

export const ADD_ACCOUNT = gql`
  mutation addAccount(
    $username: String!
    $password: String!
  ) {
    addAccount(
      username: $username
      password: $password
    ) {
      token
      account {
        _id
      }
    }
  }
`;

export const ADD_SCORE = gql`
    mutation AddScore(
      $username: String!
      $score: Int!) {
        addScore(
          username: $username
          score: $score) {
            _id
            score
        }
    }
`;

// in the future for passing for specific scores will need ($score:INT!)
export const DELETE_SCORE = gql `
    mutation DeleteScore(
      $profileId: ID!
    ) {
      deleteScore(
        profileId: $profileId
      ) {
        _id
        score
      }
    }
`;