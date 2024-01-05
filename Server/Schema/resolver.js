const { Account } = require("../models/Account");

const resolver = {
    Query: {
      users: async () => {
        return Account.find(); 
      },
      user: async (parent, { userId }) => {
        return Account.find({_id: userId});
      }
    },

    Mutation: { 
        addUser: async(parent, { newUserInput }) => {
        const newUser = await Account.create(newUserInput);
        return newUser; 
    },
    userLogin: async (parent, { username, password }) =>
    {
        const userInfo = await Account.findOne({ username });
        if(!userInfo) {
            alert('Incorrect user info');
        }

        const pw = await userInfo.correctPassword(password);
        if(!pw) { 
            alert('Incorrect password');
        }
    }, 



    },
  };

module.exports = resolver;