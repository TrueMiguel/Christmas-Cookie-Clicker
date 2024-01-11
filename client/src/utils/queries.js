import { gql } from '@apollo/client'

export const SINGLE_SCORE = gql `
    query singleScore {
        score {
            _id
            score
        }
    }
`