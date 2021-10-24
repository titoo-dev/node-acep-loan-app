import adminService from "../services/admin.service.js"

class AdminRouterController {
    constructor() {
        this.getAll = this.getAll.bind(this)
        this.getOnce = this.getOnce.bind(this)
        this.add = this.add.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(req, res, next) {
        try {
            res.json(await adminService.getAll(req.query.page))
        } catch (error) {
            console.error(`Error while getting admin`, error.message);
            next(error)   
        }
    }

    async getOnce (req, res, next) {
        const id = req.params.id
        try {
            res.json(await adminService.getOnce(id))
        } catch (error) {
            console.error(`Error while getting admin`, error.message);
            next(error)   
        }
    }
    
    async add (req, res, next) {
        const playload = req.body
        try {
            res.json(await adminService.add(playload))    
        } catch (error) {
            console.error(`Error while adding admin`, error.message);
            next(error)  
        }
    }
    async update (req, res, next) {
        const id = req.params.id
        const payload = req.body
        try {
            res.json(await adminService.update(id, payload))            
        } catch (error) {
            console.error(`Error while updating admin`, error.message);
            next(error)  
        }
    }
    async delete (req, res, next) {
        const id = req.params.id
        try {
            res.json(await adminService.delete(id))
        } catch (error) {
            console.error(`Error while deleting admin`, error.message);
            next(error)  
        }
    }
}

export default new AdminRouterController()