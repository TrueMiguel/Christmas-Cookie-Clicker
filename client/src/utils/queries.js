import { gql } from '@apollo/client'

export const ADD_SCORE = gql`
    mutation AddScore($score: Int!) {
        addScore(score: $score) {
            _id
            score
        }
    }
`;