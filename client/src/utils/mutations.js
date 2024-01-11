import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_SCORE = gql`
    mutation AddScore($score: Int!) {
        addScore(score: $score) {
            _id
            score
        }
    }
`;

// in the future for passing for specific scores will need ($score:INT!)
export const DELETE_SCORE = gql `
    mutation DeleteScore {
      deleteScore {
        _id
        score
      }
    }
`;