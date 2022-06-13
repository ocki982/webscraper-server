const express = require("express");
const router = express.Router();
const { getData } = require("../controllers/listController");

// GET /list
router.get('/', getData);

module.exports = router;
