const { Schema, model } = require('mongoose');

const ClickerSchema = new Schema({
  
});

const Clicker = model('Clicker', ClickerSchema);

module.exports = Clicker;
