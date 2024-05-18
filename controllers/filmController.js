const { Film } = require("../models");

class FilmController{
    static async create(req,res,next){
    }

    static async get(req,res,next){
        const data = await Film.findAll();
        res.status(200).json(data);
    }
}