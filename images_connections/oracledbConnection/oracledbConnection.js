
const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

  async function getConnection(){

    let connection ;

    try {

        connection = await oracledb.getConnection({
            user:'system',
            password : 'Ganga2820',
            connectString:'localhost/orcl'
        });

    let data = await connection.execute(
        'select * from studentlogindata'
    )

    console.log(data.rows);
    }

    catch (err){
        console.log(err.message);
    }

}

getConnection()
