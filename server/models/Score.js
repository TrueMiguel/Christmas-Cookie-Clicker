const { Schema, model } = require('mongoose');

// Schema for score model
const ScoreSchema = new Schema({
  score: {
    type: Number,
    required: true,
    default: 0,
  }
});


const Score = model('Score', ScoreSchema);

module.exports = { Score, ScoreSchema };
