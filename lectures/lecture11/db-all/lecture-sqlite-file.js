
const sqlite = require('sqlite');
const dbPromise = sqlite.open('./testdb.db', { Promise });

// dbPromise.then(dbh => {
//     console.log(`connected to DB : ${dbh.driver.filename}`)
//     return dbh.get('SELECT * FROM person')
// }).then( res => {
//     console.log(res)
// })

async function dowrk() {
    let dbh = await dbPromise;
    let res = await dbh.get('SELECT * FROM person');

    return res;
}

dowrk().then( res => { 
    console.log(res)
} )