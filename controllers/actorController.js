const { Actor } = require('../models')

class actorController {
    static async create(req, res, next) {
        const { name, email } = req.body
        const data = await User.create({
            name, email
        })

        res.status(201).json(data);
    }

    static async get(req, res, next) {
        const data = await Actor.findAll({
            // "firstName" and "lastName" are attributes of the "User" model
            attributes: ['first_name', 'last_name'],
        });
        res.status(200).json(data)
    }

    static async getOne(req, res, next) {
        const { id } = req.params
        // const data = await User.findByPk(id)
        const data = await Actor.findOne({
            // "firstName" and "lastName" are attributes of the "User" model
            attributes: ['first_name', 'last_name'],
            where: {
                id: id,
            },
        });
        res.status(200).json(data)
    }

    // explore untuk PUT
    
    static async delete(req, res, next) {
        const {id} = req.params
        await User.destroy(
            {where: {
                    id: id
                }
            }
        )

        res.status(200).json(
            {
                message: "successfully delete"
            }
        )
    }
}

module.exports = actorController;