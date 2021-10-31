import database from "../databases/database.js"
import helper from "../helpers/helper.js"

class AuthService {
    constructor() {
        this.auth = this.auth.bind(this)
    }

    async auth(payload) {
        const { email, password } = payload
        let message = "" 
        let isAuth
        const row = await database.query(`
            SELECT * FROM user WHERE EMAIL=?
        `, [email])
        const data = helper.emptyOrRows(row)
        if(data[0].MOT_DE_PASSE == password) {
            message = "authentication success !"
            isAuth = true
        } else {
            message = "authentication failed !"
            isAuth = false
        }
        return { data, message, isAuth }
    }
}

export default new AuthService()