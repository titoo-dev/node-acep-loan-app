import database from "../databases/database.js"
import helper from "../helpers/helper.js"
import uniqid from 'uniqid'

class LoanService {
    constructor() {
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.getOnce = this.getOnce.bind(this)
        this.add = this.add.bind(this)
    }

    async getAll(page=1) {
        const offset = helper.getOffset(page, 10)
        const rows = await database.query(
            `SELECT * FROM loan LIMIT ?,?`, 
            [offset, 10]
        )

        const data = helper.emptyOrRows(rows)
        const meta = { page }

        return { data, meta }
    }

    async getById(id, page=1) {
        const offset = helper.getOffset(page, 10)
        const rows = await database.query(
            `SELECT * FROM loan WHERE CODE_USER=? LIMIT ?,?`, 
            [id, offset, 10]
        )

        const data = helper.emptyOrRows(rows)
        const meta = { page }

        return { data, meta }
    }

    async getOnce(id) {
        const row = await database.query(
            `SELECT * FROM loan WHERE CODE_LOAN=?`,
            [id]
        )

        const data = helper.emptyOrRows(row)
        return { data }
    }

    async add(payload) {
        const id = uniqid()
        const { userId, firstName, lastName, address, country, province, zip, children, patrimonialSituation, work, secteur, revenuMensuel, montant, accepted } = payload
        const datetime = new Date().toLocaleString()
        
        const row = await database.query(
            `INSERT INTO LOAN
                (CODE_LOAN, CODE_USER, PRENOM, NOM, ADRESSE, VILLE, PROVINCE, ZIP, NOMBRE_ENFANT, SITUATION_PATRIMONIALE, PROFESSION, SECTEUR, REVENU_MENSUEL, MONTANT, DATE_CREATION, APPROUVE)
                VALUES
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [id, userId, firstName, lastName, address, country, province, zip, children, patrimonialSituation, work, secteur, revenuMensuel, montant, datetime.toString(), accepted]
        )
        const data = helper.emptyOrRows(row)
        const message = "loan added successfully !"
        return { data, message }
    }

    async update(id, payload) {
        const codeLoan = id
        const { approuve } = payload

        const row = await database.query(
            `UPDATE LOAN SET APPROUVE = ? true WHERE CODE_LOAN = ?`
        , [approuve, codeLoan])

        const data = helper.emptyOrRows(row)
        const message = "loan updated successfully !"
        return { data, message }
    }

}

export default new LoanService()