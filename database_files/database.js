const mysql = require('mysql')

class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config)
    }
    query( sql, args) {
        return new Promise((resolve) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) throw err
                resolve(rows)
            })
        })
    }
    close() {
        return new Promise((resolve) => {
            this.connection.end((err) => {
                if (err) throw err
                resolve()
            })
        })
    }
}

module.exports = Database