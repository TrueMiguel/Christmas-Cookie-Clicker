const mongoose = require('mongoose');

module.exports = async (collectionName) => {
  try {
    // Ensure the database connection is established
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Miguel:Megamono%401@cluster0.hazfobm.mongodb.net/clicker-data');
    }

    // Access the database from the connection
    const db = mongoose.connection.db;

    // Get the list of collections
    const collections = await db.listCollections().toArray();

    // Check if the specified collection exists
    const collectionExists = collections.some(col => col.name === collectionName);

    if (collectionExists) {
      // Drop the collection if it exists
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
