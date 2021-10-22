import database from "../databases/database.js"
import helper from "../helpers/helper.js"
import bureauService from "../services/bureau.service.js"

class BureauRouterController {
    constructor() {
        this.getAll = this.getAll.bind(this)
    }

    async getAll(req, res, next) {
        try {
            res.json(await bureauService.getAll(req.query.page))
        } catch (error) {
            console.error(`Error while getting bureau`, error.message);
            next(error)   
        }
    }
}

export default new BureauRouterController()