
const express = require("express")
const router = express.Router();
const film = require("./film")
const actor = require("./actor")

router.use('/film', film) 
router.use('/actor', actor) 

module.exports = router