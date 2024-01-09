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
// this is a test ot see if it works

module.exports = typeDefs;