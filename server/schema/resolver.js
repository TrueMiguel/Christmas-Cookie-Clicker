const { Account, Score } = require("../models/");
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
  Query: {
    accounts: async () => {
      return Account.find(); 
    },
    account: async (parent, { username }) => {
      return Account.findOne({ username: username });
    },

    // adding means of retrieving score data
    scores: async () => {
      return await Score.find({})
    }
  },
  Mutation: { 
    addAccount: async (parent, { username, password }) => {
      try {
        const user = await Account.create({ username, password });
        const token = signToken(user)

        return { token, user };

      } catch (error) {
        throw new Error("Can not create user, please try again");
      }

    },

    login :async (parent, { username, password }) => {
      const account = await Account.findOne({ username })

      if (!account) {
        // will update terms to be ambigious, right now want to make sure the path works. 
        throw AuthenticationError , console.log('Profile not found')
      }

      const correctPW = await account.isCorrectPassword(password);

        // will update terms to be ambigious, right now want to make sure the path works. 

      if (!correctPW) {
        throw AuthenticationError , console.log('Password not correct')
      }

      const token = signToken(account)

      return { token, account }
    },

    removeAccount: async (parent, { profileId }) => {
      return Account.findOneAndDelete({ _id: profileId})
    },

    // adding code for adding score
    addScore: async (parent, { username, score }) => {
      try {

        // find the existing score or crate a new one
        let user = await Account.findOne({ username: username });
        if (!user.score) {
          user.score = 0;
        }
        
        // increment and save the score
        user.score = score;
        await user.save();
        
        return user.score;
      }
      catch(error) {
        console.log(error);
      }
    },

    // adding delete route for score
    deleteScore: async (parent, { profileId }) => {
      let account = await Account.findById(profileId);
      account.score = 0;
      await account.save();
      return { account };
    }
  },
};

module.exports = resolvers;
