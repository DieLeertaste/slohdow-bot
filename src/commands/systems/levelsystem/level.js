const db = require('../../../database.js');

function db_registered (){
    //const [rows, fields] = db.execute('SELECT * FROM user WHERE id=1')
    //console.log(rows)
    db.execute('SELECT * FROM user WHERE id=1').then(result => {
        console.log(result[])
    })
}

db_registered()