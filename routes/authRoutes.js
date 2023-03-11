const express = require('express');
const router = express.Router()

const {signup, signin} = require("../controllers/authController");


router.route("/").get(signin);
router.route("/signup").get(signup);
module.exports = router;