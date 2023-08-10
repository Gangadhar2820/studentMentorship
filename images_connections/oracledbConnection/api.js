 const express = require('express');
 const oracledb = require('oracledb');
 const bodyParser = require('body-parser');


 const app = express();

 app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     next();
//   });

// // Set up a GET endpoint to retrieve data from the students table
// app.get('/employee', async (req, res) => {

    
  
//   try {
//     const conn = await oracledb.getConnection({
//       user: 'system',
//       password: 'Ganga2820',
//       connectString: 'localhost/orcl'
//     });

//     const result = await conn.execute('SELECT * FROM employee');

//     res.send(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }



// });


// app.get('/boats', async (req, res) => {

   
  
//   try {
//     const conn = await oracledb.getConnection({
//       user: 'system',
//       password: 'Ganga2820',
//       connectString: 'localhost/orcl'
//     });

//     const result = await conn.execute('SELECT * FROM boats');

//     res.send(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }



// });

// app.post('/hello',function(req,res){

    
  
//     console.log(req.body)

// //     res.send('Data recieved successfully')

// // })
// // // Start the server
// // app.listen(3000, () => console.log('Server listening on port 3000...'));


// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.json());

// app.post('/my-api', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   console.log(req.body); // logs the received data to the console
//   res.send('Data received successfully');
// });

// app.listen(3000, () => console.log('Server listening on port 3000...'));

