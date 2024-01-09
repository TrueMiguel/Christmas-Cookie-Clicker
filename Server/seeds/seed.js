const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./accountSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    
    await User.create(userSeeds);

    console.log('Complete!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});