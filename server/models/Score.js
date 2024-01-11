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

// async function updateUserScore(userId, clicks) {
//   try {
//     const userScore = await Score.findOne({ userId });

   
//     if (userScore) {
      
//       userScore.score += clicks;
//       await userScore.save();
//       return userScore.score;
//     } else {
//       const newUserScore = new Score({ userId, score: clicks });
//       await newUserScore.save();

      
//       return clicks;
//     }
//   } catch (error) {
//     console.error("Error updating user score:", error);
//     throw new Error("Failed to update user score");
//   }
// };

module.exports = Score;