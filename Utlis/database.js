// const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'praveen',
//     database: 'mydb'
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//     } else {
//         console.log(' database connected');
//     }
// });

// module.exports = db  

module.exports = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'praveen',
        database: 'mydb'
    }
};
