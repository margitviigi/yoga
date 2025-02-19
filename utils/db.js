const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'yoga_mysql'
} )

connection.connect ((err) => {
    if(err) throw err
    console.log('MySQL server is connected at http://localhost:3012')
} )

module.exports = connection