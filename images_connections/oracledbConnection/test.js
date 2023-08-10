const getConnection = require('./oracledbConnection');

async function fetchBoats(){

    let server = await getConnection();

    let data = await server.execute(
        'select * from boats '
    )

    console.log(data.rows)

}

async function addboats(){

    let server = await getConnection();

    await server.execute(
        "insert into boats(bid,bname,color) values(1111,'hll','kll')"
    )

    await server.execute('commit')
    
}

//addboats();

fetchBoats();