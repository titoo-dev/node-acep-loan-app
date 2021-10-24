import database from "../databases/database.js"
import helper from "../helpers/helper.js"
import uniqid from 'uniqid'

class AdminService {
    constructor() {
        this.getAll = this.getAll.bind(this)
        this.getOnce = this.getOnce.bind(this)
        this.add = this.add.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(page=1) {
        const offset = helper.getOffset(page, 10)
        const rows = await database.query(
            `SELECT * FROM admin LIMIT ?,?`, 
            [offset, 10]
        )

        const data = helper.emptyOrRows(rows)
        const meta = { page }

        return { data, meta }
    }

    async getOnce(id) {
        const row = await database.query(
            `SELECT * FROM admin WHERE CODE_ADMIN=?`,
            [id]
        )

        const data = helper.emptyOrRows(row)
        return { data }
    }

    async add(payload) {
        const id = uniqid()
        const { email, password } = payload
        const row = await database.query(
            `INSERT INTO ADMIN
                (CODE_ADMIN, EMAIL, MOT_DE_PASSE)
                VALUES
                (?, ?, ?)`,
                [id, email, password]
        )
        const data = helper.emptyOrRows(row)
        const message = "admin added successfully !"
        return { data, message }
    }

    async update(id, payload) {
        const { password } = payload
        const row = await database.query(`
            UPDATE admin SET MOT_DE_PASSE=? WHERE CODE_ADMIN=?
        `,[password, id])
        const data = helper.emptyOrRows(row)
        const message = "user updated successfully !"
        return { data, message }
    }

    async delete(id) {
        const row = await database.query(`
            DELETE FROM admin WHERE CODE_ADMIN=?
        `, [id])

        const data = helper.emptyOrRows(row)
        const message = "admin deleted successfully !"
        return { data, message }
    }
}

export default new AdminService()