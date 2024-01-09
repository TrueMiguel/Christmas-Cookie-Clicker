const { Schema, model } = require('mongoose');

// Schema for upgrade model
const UpgradeSchema = new Schema({
  defaultCookie: {
    type: Boolean,
    required: true,
    default: true,
  },
  nextCookie: {
    type: Boolean,
    required: true,
  },
  lastCookie: {
    type: Boolean,
    required: true,
  },

  // Cookies' click value
  defaultCookieClick: {
    type: Number,
    default: 100,
  },
  nextCookieClick: {
    type: Number,
    default: 300,
  },
  lastCookieClick: {
    type: Number,
    default: 9001, // IT'S OVER 9000!!
  },

  // Required clicks needed to upgrade to the next cookie
  requiredClicksToNextCookie: {
    type: Number,
    default: 2000,
  },
  requiredClicksToLastCookie: {
    type: Number,
    default: 8000,
  },
});

const Upgrade = model('Upgrade', UpgradeSchema);

module.exports = Upgrade;
