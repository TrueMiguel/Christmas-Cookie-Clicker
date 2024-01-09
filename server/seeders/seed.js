const db = require('../config/connection');
const { Score } = require('../models');
const scoreSeed = require('./scoreSeed.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Score');
    
    await Score.create(scoreSeed);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});