import mysql from 'mysql2/promise'

import dbConfig from './database.config.js'

class Database {
    async query(sql, params) {
        const connection = await mysql.createConnection({
            host: dbConfig.host,
            user: dbConfig.user,
            password: dbConfig.password,
            database: dbConfig.database
        })

        const [results, ] = await connection.execute(sql, params)

        return results
    }
}

export default new Database()