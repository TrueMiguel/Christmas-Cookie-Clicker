const { Account, Score } = require("../models/");

const resolvers = {
  Query: {
    // users: async () => {
    //   return Account.find(); 
    // },
    // user: async (parent, { userId }) => {
    //   return Account.find({ _id: userId });
    // },

    // adding means of retrieving score data
    score: async () => {
      return await Score.find({})
    }
  },
  Mutation: { 
    // addUser: async (parent, { username, password }) => {
    //   try {
    //     const newUser = await Account.create({ username, password });
    //     return newUser;
    //   } catch (error) {
    //     throw new Error("Can not create user, please try again");
    //   }
    // },
    
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
