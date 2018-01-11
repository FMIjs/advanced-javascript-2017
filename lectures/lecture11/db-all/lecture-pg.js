const { Client } = require('pg')

const client = new Client({
        user: 'dbuser',
        host: 'localhost',
        database: 'fmidb',
        password: '12345678!!!!!!!!',
        port: 5432,
    })

async function main() {
    await client.connect()

    // const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    // console.log(res.rows[0].message) // Hello world!

    const res = await client.query('SELECT * from person where id > $1::int', [1])
    for (let r of res.rows) {
        console.log(r)
    }
    await client.end()
}  

main()