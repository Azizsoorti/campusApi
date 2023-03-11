const authModel = require ("../models/authModel");

// SIGNUP
const signup = async (req,res) =>{
    res.status(200).json({msg: "I am signup"});
}

// SIGNIN
const signin = (req, res) =>{
    res.status(200).json({msg: "I am signin"});
}



module.exports = (signup, signin )