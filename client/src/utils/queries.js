import { gql } from '@apollo/client'

export const SINGLE_SCORE = gql `
    query singleScore($username: String!) {
        account(username: $username) {
            _id
            username
            score
        }
    }`