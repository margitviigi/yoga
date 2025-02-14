const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'joga_mysql'
} )

connection.connect ((err) => {
    if(err) throw err
    console.log('MySQL server is connected')
} )

function showExistingContent() {
    connection.query('SELECT * FROM your_table_name', (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

module.exports = {
    connection,
    showExistingContent
};