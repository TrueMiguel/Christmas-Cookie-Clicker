const { Schema, model } = require('mongoose');

// Schema for upgrade model
const UpgradeSchema = new Schema({
  cookie1: {
    type: Boolean,
    required: true,
  },
  cookie2: {
    type: Boolean,
    required: true,
  },
  cookie3: {
    type: Boolean,
    required: true,
  },
});

const Upgrade = model('Upgrade', UpgradeSchema);

module.exports = Upgrade;
