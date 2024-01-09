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
type Mutation {
    addScore: Score
}

`;

module.exports = typeDefs;