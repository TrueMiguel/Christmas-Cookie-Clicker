const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { ScoreSchema } = require ('./Score');

// Schema for account model
const AccountSchema = new Schema ({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
  },
  score: ScoreSchema
});

// Validate the password: hash it if it's modified or new
AccountSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {

    // Hash the password with bcrypt and 8 salt rounds
    this.password = await bcrypt.hash(this.password, 8);
  }

  next();
});

// Compare the password with the hashed password in the database
AccountSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Account = model('Account', AccountSchema);

module.exports = Account;