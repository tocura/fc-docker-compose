const express = require('express')
const mysql = require('mysql2')
const rname = require('node-random-name')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'fc-mysql'
}

const randomName = rname({first: true})

const connection = mysql.createConnection(config)
const sql = `insert into people(name) values('${randomName}');`
connection.query(sql)

app.get('/', (req, res) => {
    const sqlGetNames = `select * from people`
    connection.query(sqlGetNames, (err, results, fields) => {
        const names = results.map(row => {return row.name})
        res.send(`
            <h1>Full Cycle Rocks!</h1>
            <div>${names}</div>
        `)
    })
})

app.listen(port, () => {
    console.log('running on port: ' + port)
})


