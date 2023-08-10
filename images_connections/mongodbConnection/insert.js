const dbConnect = require('./server');

const insert = async ()=>{
    const db = await dbConnect();
    const result = db.insertOne({'name':'sai'})
}

insert();