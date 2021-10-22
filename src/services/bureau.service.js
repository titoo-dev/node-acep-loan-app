import database from "../databases/database.js"
import helper from "../helpers/helper.js"

class BureauService {
    constructor() {
        this.getAll = this.getAll.bind(this)
    }

    async getAll(page=1) {
        const offset = helper.getOffset(page, 10)
        const rows = await database.query(
            `SELECT * FROM bureau LIMIT ?,?`, 
            [offset, 10]
        )

        const data = helper.emptyOrRows(rows)
        const meta = { page }

        return { data, meta }
    }
}

export default new BureauService()