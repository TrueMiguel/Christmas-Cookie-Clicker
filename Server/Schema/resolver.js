const { Account } = require("../models/Account");

const resolver = {
  Query: {
    users: async () => {
      return Account.find(); 
    },
    user: async (parent, { userId }) => {
      return Account.find({ _id: userId });
    },
  },
  Mutation: { 
    addUser: async (parent, { username, password }) => {
      try {
        const newUser = await Account.create({ username, password });
        return newUser;
      } catch (error) {
        throw new Error("Can not create user, please try again");
      }
    },
    
    updateUser: async (parent, { id, username }) => {
      try {
        const updatedUser = await Account.findByIdAndUpdate(
          id,
          { username },
          { new: true }
        );
        return updatedUser;
      } catch (error) {
        throw new Error("Can not update user, please try again");
      }
    },

    userLogin: async (parent, { username, password }) => {
      try {
        const userInfo = await Account.findOne({ username });

        if (!userInfo) {
          throw new Error("Incorrect user info");
        }

        const isCorrectPassword = await userInfo.correctPassword(password);
        if (!isCorrectPassword) {
          throw new Error("Incorrect password");
        }
        return { message: "Login successful", token: "yourAuthToken" };
      } catch (error) {
        throw new Error("Login failed");
      }
    },
  },
};

module.exports = resolver;
