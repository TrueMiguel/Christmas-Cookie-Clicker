const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
  },
});

// Validate the password: hash it if it's modified or new
AccountSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }

    // Hash the password with bcrypt and 8 salt rounds
    this.password = await bcrypt.hash(this.password, 8);
    next();
});

const Account = model('Account', AccountSchema);

module.exports = Account;