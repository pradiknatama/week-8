const express = require("express")
const router = express.Router()

const actorController =require("../controllers/actorController");


// router.post('/',FilmController.create);
router.get('/',actorController.get);
router.get('/:id',actorController.getOne);

module.exports = router;