const express = require('express');

// adding in apollo server
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4')
const path = require('path')

const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// setting up more server components
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();

    // need to check the extend statement, i see false in my reference
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
        
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    
    }

    app.use('/graphql', expressMiddleware(server));
    
    db.once('open', () => {
        app.listen(PORT, () => {
          console.log(`API server running on port ${PORT}!`);
          console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
      });
};

startApolloServer();
