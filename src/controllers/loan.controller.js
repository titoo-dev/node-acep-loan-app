import loanService from "../services/loan.service.js"


class LoanRouterController {
    constructor() {
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.getOnce = this.getOnce.bind(this)
        this.add = this.add.bind(this)
    }

    async getAll(req, res, next) {
        try {
            res.json(await loanService.getAll(req.query.page))
        } catch (error) {
            console.error(`Error while getting loan`, error.message);
            next(error)   
        }
    }

    async getById(req, res, next) {
        const id = req.params.id
        try {
            res.status(200).json(await loanService.getById(id, req.query.page))
        } catch (error) {
            console.error(`Error while getting loan`, error.message);
            next(error)   
        }
    }

    async getOnce (req, res, next) {
        const id = req.params.id
        try {
            res.status(200).json(await loanService.getOnce(id))
        } catch (error) {
            console.error(`Error while getting loan`, error.message);
            next(error)   
        }
    }
    
    async add (req, res, next) {
        const playload = req.body
        try {
            res.status(201).json(await loanService.add(playload))    
        } catch (error) {
            console.error(`Error while adding loan`, error.message);
            next(error)  
        }
    }

    async update(req, res, next) {
        const id = req.params.id
        const payload = req.body
        try {
            res.status(201).json(await loanService.update(id, payload))
        } catch (error) {
            console.error(`Error while updating loan`, error.message)
            next(error)
        }
    }
}

export default new LoanRouterController()