
const express = require("express")
const router = express.Router();
const film = require("./film")
const actor = require("./actor")
const category = require("./category")

router.use('/film', film) 
router.use('/actor', actor) 
router.use('/category', category) 

module.exports = router