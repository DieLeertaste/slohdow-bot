const mysqpl = require('mysql2')

const database_password = process.env.database_password
const pool = mysqpl.createPool({
  host: "localhost",
  user: "root",
  password: "n7GSycc@$sWnT1F6LmDj",
  database: "slohdow-bot",
}); 

module.exports = pool.promise()
db = pool.promise()
