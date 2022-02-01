// require/import mongoose 

const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
    email: String, 
    name: String,
})

const User = mongoose.model('User', UserSchema)

module.exports = User