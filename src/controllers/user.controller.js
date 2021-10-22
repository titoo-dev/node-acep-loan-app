import database from "../databases/database.js"
import helper from "../helpers/helper.js"
import userService from "../services/user.service.js"

class UserRouterController {
    constructor() {
        this.getAll = this.getAll.bind(this)
        this.getOnce = this.getOnce.bind(this)
        this.add = this.add.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(req, res, next) {
        try {
            res.json(await userService.getAll(req.query.page))
        } catch (error) {
            console.error(`Error while getting bureau`, error.message);
            next(error)   
        }
    }

    async getOnce (req, res, next) {
        const id = req.params.id
        try {
            res.json(await userService.getOnce())
        } catch (error) {
            
        }
    }
    async add (req, res, next) {
        try {
            
        } catch (error) {
            
        }
    }
    async update (req, res, next) {

        try {
            
        } catch (error) {
            
        }
    }
    async delete (req, res, next) {
        try {
            
        } catch (error) {
            
        }
    }
}

export default new UserRouterController()