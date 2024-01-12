const typeDefs = `
# creating typeDef for the score and account
type Account {
    _id: ID
    username: String
    password: String
    score: Score!
}

type Score {
    _id:ID
    score: Int
}

#adding in query for score retrival
type Query {
    scores: [Score]!
    accounts: [Account]!
}

#mutation for adding score numbers
#will have to update the score:Int! to id:ID!
type Mutation {
    addScore(score: Int!): Score
    deleteScore: Score
}

`;

module.exports = typeDefs;