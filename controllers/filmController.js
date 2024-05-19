const { Film } = require("../models");

class FilmController{
    static async create(req,res,next){
    }

    static async get(req,res,next){
        // find all untuk get semua data
        const data = await Film.findAll({
            // "firstName" and "lastName" are attributes of the "User" model
            attributes: ['title', 'description'],
          });
        res.status(200).json(data);
        // res.status(200).json("data");
    }
    static async getOne(req,res,next){
        const { id } = req.params
        // findOne untuk get 1 data
        const data = await Film.findOne({
            // "firstName" and "lastName" are attributes of the "User" model
            attributes: ['title', 'description'],
            where: {
                id: id,
            },
          });
        res.status(200).json(data);
        // res.status(200).json("data");
    }
}
module.exports= FilmController