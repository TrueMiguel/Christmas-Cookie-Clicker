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
    score: async () => {
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
      return Profile.findOneAndDelete({ _id: profileId})
    },
    
    // updateUser: async (parent, { id, username }) => {
    //   try {
    //     const updatedUser = await Account.findByIdAndUpdate(
    //       id,
    //       { username },
    //       { new: true }
    //     );
    //     return updatedUser;
    //   } catch (error) {
    //     throw new Error("Can not update user, please try again");
    //   }
    // },

    // userLogin: async (parent, { username, password }) => {
    //   try {
    //     const userInfo = await Account.findOne({ username });

    //     if (!userInfo) {
    //       throw new Error("Incorrect user info");
    //     }

    //     const isCorrectPassword = await userInfo.correctPassword(password);
    //     if (!isCorrectPassword) {
    //       throw new Error("Incorrect password");
    //     }
    //     return { message: "Login successful", token: "yourAuthToken" };
    //   } catch (error) {
    //     throw new Error("Login failed");
    //   }
    // },

    // adding code for adding score
    addScore: async (parent, args) => {
      try {

        // find the existing score or crate a new one
        let currentScore = await Score.findOne({});
        if (!currentScore) {
          currentScore = new Score({ score: 0 });
        }
        
        // increment and save the score
        currentScore.score = args.score;
        await currentScore.save();
        
        return currentScore;
      }
      catch(error) {
        console.log(error);
      }
    },

    // adding delete route for score
    deleteScore: async (parent, args) => {

      return Score.findOneAndDelete({})
    }
  },
};

module.exports = resolvers;
