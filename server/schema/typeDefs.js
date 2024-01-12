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

#setting up a Auth type for handle profile creating or user login
type Auth {
    token: ID!
    account: Account
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

    #adding mutations to handle profile creation or logging in
    addAccount(username: String!, password: String! ): Auth
    login(username: String!, password: String!): Auth
}

`;

module.exports = typeDefs;