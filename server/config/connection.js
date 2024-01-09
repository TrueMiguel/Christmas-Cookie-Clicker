const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Miguel:Megamono%401@cluster0.hazfobm.mongodb.net/clicker-data');

module.exports = mongoose.connection;