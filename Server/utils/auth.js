const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'secretsecret';
const expiration = '24h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
        extensions: {
          code: 'UNAUTHENTICATED',
        },
      }),

      signToken: function ({ username, _id }) {
        const payload = { username, _id };

        return jwt.sign({ data: payload }, secret, {expiresIn: expiration})
      },
};