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

  //const express = require('express');
// server.js
// const PORT = process.env.PORT || 3000;
// const app = express();


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));

module.exports = resolver;