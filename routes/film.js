const express = require("express")
const router = express.Router()

const FilmController =require("../controllers/filmController");


// router.post('/',FilmController.create);
router.get('/cat',FilmController.getRelasi);
router.get('/',FilmController.get);
router.get('/:id',FilmController.getOne);

module.exports = router;