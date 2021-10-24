import mysql from 'mysql2/promise'
import dbConfig from './database.config.js'


class Database {

    async query(sql, params) {
        const connection = await mysql.createConnection(dbConfig)

        const [results, ] = await connection.execute(sql, params)

        return results
    }
}

export default new Database()