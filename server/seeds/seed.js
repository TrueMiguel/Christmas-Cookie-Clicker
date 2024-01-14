const db = require('../config/connection');
const { Account, Score } = require('../models');
const accountSeeds = require('./accountSeeds.json');
const scoreSeeds = require('../seeders/scoreSeed.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('accounts');
    await cleanDB('scores');
    
    await Account.create(accountSeeds);

    console.log('Complete!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});