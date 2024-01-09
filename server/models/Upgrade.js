const { Schema, model } = require('mongoose');

// Schema for upgrade model
const UpgradeSchema = new Schema({
  defaultcookie: {
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
  requiredClicks: {
    type: Number,
    default: 2000,
  },
  clicks: {
    type: Schema.Types.ObjectId,
    ref: 'Click',
    required: true,
  },
});

const Upgrade = model('Upgrade', UpgradeSchema);

module.exports = Upgrade;
