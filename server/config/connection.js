const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://monoman:sNjJvHZri7O5Flp6@cluster0.llophc6.mongodb.net/clicker-data');

// mongodb+srv://monoman:sNjJvHZri7O5Flp6@cluster0.llophc6.mongodb.net/?retryWrites=true&w=majority
module.exports = mongoose.connection;