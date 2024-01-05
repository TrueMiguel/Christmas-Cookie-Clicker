const { Schema, model } = require('mongoose');

const ClickerSchema = new Schema({
  click: {
    type: Number,
    required: true,
  }
});

const Clicker = model('Clicker', ClickerSchema);

module.exports = Clicker;