const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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

AccountSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }

    this.password = await bcrypt.hash(this.password, 8);
    next();
});

const Account = model('Account', AccountSchema);

module.exports = Account;