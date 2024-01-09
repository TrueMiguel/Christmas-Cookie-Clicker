const { Schema, model } = require('mongoose');

// Import the Upgrade model
const Upgrade = require('./Upgrade'); 

// Schema for clicker model
const ClickerSchema = new Schema({
  clicks: {
    type: Number,
    required: true,
  },
  upgrades: {
    // Use Upgrade schema directly
    type: Upgrade.schema, 
    // Give value for cookies to have upgrade model
    default: () => ({
      cookie1: false,
      cookie2: false,
      cookie3: false,
      clicksRequiredCookie2: 2000,
      clicksRequiredCookie3: 8000,
      clickValueCookie1: 100,
      clickValueCookie2: 300,
      clickValueCookie3: 9001,
    }),
  },
});

const Clicker = model('Clicker', ClickerSchema);

module.exports = Clicker;
