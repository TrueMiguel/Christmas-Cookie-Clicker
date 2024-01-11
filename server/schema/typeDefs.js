const typeDefs = `
# creating typeDef for the score
type Score {
    _id:ID
    score: Int
}

#adding in query for score retrival
type Query {
    score: [Score]!
}

#mutation for adding score numbers
#will have to update the score:Int! to id:ID!
type Mutation {
    addScore(score: Int!): Score
    deleteScore: Score
}

`;
// this is a test ot see if it works

module.exports = typeDefs;