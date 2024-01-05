const { Schema, model } = require('mongoose');

const ScoreSchema = new Schema({
  
});

const Score = model('Score', ScoreSchema);

module.exports = Score;