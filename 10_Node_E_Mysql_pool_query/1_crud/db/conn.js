const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'nodemysql',
});

module.exports = pool