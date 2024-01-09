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
    // Give an empty object to default value
    default: () => ({}),
  },
});

const Clicker = model('Clicker', ClickerSchema);

module.exports = Clicker;
