const express= require("express");
const router= express.Router();

const FilmController =require("../controllers/filmController");


router.post('/',FilmController.create);
router.get('/',FilmController.get);

module.exports = router;