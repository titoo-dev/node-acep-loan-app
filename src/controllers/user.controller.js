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
            console.error(`Error while getting user`, error.message);
            next(error)   
        }
    }

    async getOnce (req, res, next) {
        const id = req.params.id
        try {
            res.json(await userService.getOnce(id))
        } catch (error) {
            console.error(`Error while getting user`, error.message);
            next(error)   
        }
    }
    
    async add (req, res, next) {
        const playload = req.body
        try {
            res.status(201).json(await userService.add(playload))    
        } catch (error) {
            console.error(`Error while adding user`, error.message);
            next(error)  
        }
    }
    async update (req, res, next) {
        const id = req.params.id
        const payload = req.body
        try {
            res.json(await userService.update(id, payload))            
        } catch (error) {
            console.error(`Error while updating user`, error.message);
            next(error)  
        }
    }
    async delete (req, res, next) {
        const id = req.params.id
        try {
            res.json(await userService.delete(id))
        } catch (error) {
            console.error(`Error while deleting user`, error.message);
            next(error)  
        }
    }
}

export default new UserRouterController()