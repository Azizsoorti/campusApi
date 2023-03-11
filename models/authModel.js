const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
      }, 
      email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
        minLength: 8,
      },
      ConfirmPassword: {
        type: String,
        required: true,
        minLength: 8,
      },

});

module.exports = mongoose.model('User', AuthSchema)
