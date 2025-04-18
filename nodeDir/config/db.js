const mongoose = require('mongoose');
require('dotenv').config()
exports.connectDB = async () => {
  try {

    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/interview');
    console.log('connected to db')
    return connection
  } catch (err) {
    console.log('mongodb connection error', err)
    process.exit(1);

  }
}
