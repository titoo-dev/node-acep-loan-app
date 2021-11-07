import database from "../databases/database.js"
import helper from "../helpers/helper.js"
import uniqid from 'uniqid'
import bcrypt from 'bcryptjs'


class UserService {
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
            `SELECT * FROM user LIMIT ?,?`, 
            [offset, 10]
        )

        const data = helper.emptyOrRows(rows)
        const meta = { page }

        return { data, meta }
    }

    async getOnce(id) {
        const row = await database.query(
            `SELECT * FROM user WHERE CODE_USER=?`,
            [id]
        )

        const data = helper.emptyOrRows(row)
        return { data }
    }

    async add(payload) {
        const id = uniqid()
        const { lastName, firstName, email, password } = payload
        // const encryptedPassword = bcrypt.hash(password, '')
        const row = await database.query(
            `INSERT INTO USER
                (CODE_USER, NOM, PRENOM, EMAIL, MOT_DE_PASSE)
                VALUES
                (?, ?, ?, ?, ?)`,
                [id, lastName, firstName, email, password]
        )
        const data = helper.emptyOrRows(row)
        const message = "user added successfully !"
        return { data, message }
    }

    async update(id, payload) {
        const { password } = payload
        const row = await database.query(`
            UPDATE user SET MOT_DE_PASSE=? WHERE CODE_USER=?
        `,[password, id])
        const data = helper.emptyOrRows(row)
        const message = "user updated successfully !"
        return { data, message }
    }

    async delete(id) {
        const row = await database.query(`
            DELETE FROM user WHERE CODE_USER=?
        `, [id])

        const data = helper.emptyOrRows(row)
        const message = "user deleted successfully !"
        return { data, message }
    }
}

export default new UserService()