const { Schema, model } = require('mongoose');

const UpgradeSchema = new Schema({
  
});

const Upgrade = model('Upgrade', UpgradeSchema);

module.exports = Upgrade;
