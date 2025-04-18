const  mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {type: String},
  password: {type: String},
  email: {type: String},
  date: {type: Date, default: Date.now}
})

const userModel = mongoose.model('people', userSchema )
module.exports = userModel