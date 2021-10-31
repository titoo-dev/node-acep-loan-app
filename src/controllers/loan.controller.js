import loanService from "../services/loan.service.js"


class LoanRouterController {
    constructor() {
        this.getAll = this.getAll.bind(this)
        this.getOnce = this.getOnce.bind(this)
        this.add = this.add.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(req, res, next) {
        try {
            res.json(await loanService.getAll(req.query.page))
        } catch (error) {
            console.error(`Error while getting loan`, error.message);
            next(error)   
        }
    }

    async getOnce (req, res, next) {
        const id = req.params.id
        try {
            res.json(await loanService.getOnce(id))
        } catch (error) {
            console.error(`Error while getting loan`, error.message);
            next(error)   
        }
    }
    
    async add (req, res, next) {
        const playload = req.body
        try {
            res.json(await loanService.add(playload))    
        } catch (error) {
            console.error(`Error while adding loan`, error.message);
            next(error)  
        }
    }
}

export default new LoanRouterController()