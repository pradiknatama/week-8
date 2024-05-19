const { Category } = require("../models");

class CategoryController{
    static async create(req,res,next){
    }

    static async get(req,res,next){
        // find all untuk get semua data
        const data = await Category.findAll({
            // "firstName" and "lastName" are attributes of the "User" model
            attributes: ['name'],
          });
        res.status(200).json(data);
        // res.status(200).json("data");
    }
    static async getOne(req,res,next){
        const { id } = req.params
        // findOne untuk get 1 data
        const data = await Category.findOne({
            // "firstName" and "lastName" are attributes of the "User" model
            attributes: ['name'],
            where: {
                id: id,
            },
          });
        res.status(200).json(data);
        // res.status(200).json("data");
    }
}
module.exports= CategoryController