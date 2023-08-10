//express is a middelware software used to create API's
const express = require('express');
const app = express();

//body-parser is a middelware software in node.js used to extract the incoming http request body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//CORS is Cross Origin Resource Sharing . it allows us to share resources among various websites
//In this application with the help of header "Access-Control-Allow-Origin" we can share resources
//from localhost:3000 to localhost:4200 
const cors =require('cors');
app.use(cors());

//oracledb module provides many built in functions.
//with help of oracledb module we can establish a connection between global oracle database 
//and our API
//It allows us to manipulate our oracle database
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;




// to get student data from studentlogindata table
app.get('/studentlogindata',async (req,res)=>{

    try {
        res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
        connection = await oracledb.getConnection({
            user:'system',
            password : 'Ganga2820',
            connectString:'localhost/orcl'
        });
       const  data = await connection.execute(
            'SELECT * FROM STUDENTLOGINDATA'
        );
    
        res.send(data.rows);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      }
       
});

//to get student data from studentcollegedata table
 app.get('/studentcollegedata', async (req,res)=>{

    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200')
    try{
        connection = await oracledb.getConnection({
            user:'system',
            password : 'Ganga2820',
            connectString:'localhost/orcl'
        });
       const  data = await connection.execute(
            'SELECT * FROM STUDENTCOLLEGEDATA'
        );
        
    
        res.send(data.rows);

    } catch (err) {
        console.log(err)
    }
})

app.get('/studentpersonaldata',async (req,res)=>{

    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');

    try{
         connection = await oracledb.getConnection({
            user:'system',
            password:'Ganga2820',
            connectString:'localhost/orcl'
        });

        const data = await connection.execute(
            'SELECT * FROM STUDENTPERSONALDATA'
        )

        res.send(data.rows)
    }
    catch(err){
        console.log(err)
    }

})

app.get('/studentinternalsdata',async (req,res)=>{

    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');

    const hallticket  = (req.query.hallticketno).toString().toUpperCase();

    const year = parseInt(req.query.year);


    try{
         connection = await oracledb.getConnection({
            user:'system',
            password:'Ganga2820',
            connectString:'localhost/orcl'
        });

        const data = await connection.execute(

            `SELECT * FROM STUDENTINTERNALMARKS S
             WHERE S.HALLTICKETNO = :hallticket AND S.YEAR = :year `,{hallticket,year}
        )


        res.send(data.rows);


    }catch(err){
        console.log(err)
    }
})


app.get('/studentlabdata',async (req,res)=>{

    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');

    hallticketno = (req.query.hallticketno).toString().toUpperCase();

    year = parseInt(req.query.year);

    try{
         connection = await oracledb.getConnection({
            user:'system',
            password:'Ganga2820',
            connectString:'localhost/orcl'
         });

         let data = await connection.execute(

            `SELECT * FROM STUDENTLABMARKS S
            WHERE   S.HALLTICKETNO = :hallticketno AND S.YEAR = :year`,{hallticketno,year}
         )

         res.send(data.rows)
    }catch(err){
        console.log(err)
    }

})

app.get('/studentexternalsdata',async (req,res)=>{

    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');

    hallticketno = req.query.hallticketno.toString().toUpperCase();

    year = parseInt(req.query.year);

    try{

        connection = await oracledb.getConnection({
            user:'system',
            password:'Ganga2820',
            connectString:'localhost/orcl'
        })

        data = await connection.execute(
            `SELECT * FROM STUDENTEXTERNALMARKS S
            WHERE S.HALLTICKETNO = :hallticketno AND S.YEAR = :year
            `,{hallticketno,year}
        )

        res.send(data.rows);
    }catch(err){
        console.log(err)
    }
})

app.get('/studentattendancedata',async (req,res)=>{

    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');

    hallticketno = req.query.hallticketno.toString().toUpperCase();

    year = parseInt(req.query.year);

    try{
         connection = await oracledb.getConnection({
            user:'system',
            password:'Ganga2820',
            connectString:'localhost/orcl'
        })

        data = await connection.execute(
            `SELECT * FROM STUDENTATTENDANCEDATA S
            WHERE S.HALLTICKETNO = :hallticketno AND S.YEAR = :year`,{
                hallticketno,year
            }
        )

        



        res.send(data.rows);

    }catch(err){
        console.log(err)
    }
})

app.get('/mentorlogindata',async (req,res)=>{

    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200') ;

    let username = req.query.username.toString();
    let password = req.query.password.toString();

    try{

        let connection = await oracledb.getConnection({
            user:'system',
            password:'Ganga2820',
            connectString:'localhost/orcl'
        });

        let data = await connection.execute(
            `SELECT MENTORID FROM MENTORLOGINDATA M
            WHERE M.USERNAME = :username AND M.PASSWORD =:password`,{username,password}
        )

        if(data.rows){
            
            res.send(data.rows);
        }else{
            res.send(null)
        }
        
    }catch(err){
        console.log(err)
    }



})

app.get("/getcsesyllabus",async (req,res)=>{

    res.setHeader("Access-Control-Allow-Origin",'http://localhost:4200');

    let year = parseInt(req.query.year);
    let semester = parseInt(req.query.semester);
    let hallticketno = req.query.hallticketno.toString().toUpperCase();

    try{
        let connection = await oracledb.getConnection({
            user:'system',
            password:'Ganga2820',
            connectString:'localhost/orcl'
        });

        let data1 = await connection.execute(
            `SELECT SUBJECTCODE,SUBJECTNAME,ISLAB FROM RTWENTYCSESYLLABUS R
            WHERE R.YEAR = :year AND R.SEMESTER =:semester`,{year,semester}
        )
        let data2 = await connection.execute(
            `SELECT * FROM STUDENTEXTERNALMARKS S
            WHERE S.YEAR = :year AND S.SEMESTER = :semester AND S.HALLTICKETNO = :hallticketno`,{year,semester,hallticketno}
        )

        let data3 = await connection.execute(
            `SELECT FIRSTNAME ,LASTNAME FROM STUDENTCOLLEGEDATA S
            WHERE S.HALLTICKETNO = :hallticketno
            `,{hallticketno}
        )

        

        res.send([data1.rows,data2.rows,data3.rows])

    }catch(err){
        console.log(err)
    }
})

app.post('/setexternalsdata', async (req,res)=>{

    res.setHeader("Access-Control-Allow-Origin",'http://localhost:4200');

    let hallticketno =req.query.hallticketno.toString().toUpperCase();

    let year = parseInt(req.query.year);

    let semester = parseInt(req.query.semester);

    let formData = req.body;


    try{
        let connection = await oracledb.getConnection({
            user:'system',
            password:'Ganga2820',
            connectString:'localhost/orcl'
        })

        let subjectcodes =await connection.execute(

            `SELECT S.SUBJECTCODE FROM STUDENTEXTERNALMARKS S
            WHERE S.HALLTICKETNO = :hallticketno AND S.YEAR = :year AND S.SEMESTER = :semester`,
            {hallticketno,year,semester}
        )

       for(let i of formData){

        let exist =false;
        let subjectcode = i.subjectcode;
        let subjectname = i.subjectname; 
        let grade = i.grade;
        let gradepoints = i.gradepoints;
        let credits = i.credits;

        for(let j of subjectcodes.rows){

            if(i.subjectcode == j.SUBJECTCODE){

                exist = true;
            }
        }

        if(exist){

            await connection.execute(

                `UPDATE STUDENTEXTERNALMARKS S
                SET S.GRADE = :grade ,S.GRADEPOINTS = :gradepoints , S.CREDITS = :credits 
                WHERE S.HALLTICKETNO = :hallticketno AND S.SUBJECTCODE = :subjectcode`,{grade,gradepoints,credits,hallticketno,subjectcode}
            )
        }else{

            await connection.execute(
                `INSERT INTO STUDENTEXTERNALMARKS VALUES(:hallticketno,:year,:semester,
                    :subjectcode,:subjectname,:grade,:gradepoints,:credits)`,{hallticketno,year,semester,subjectcode,subjectname,grade,gradepoints,credits}
            )
        }

       }

       await connection.execute(
        `COMMIT`
       )

    

    }
    catch(err){
        console.log(err)
    }

    res.send(true)

    
})

// app.get('/getinternalmarks',async (req,res)=>{

//     res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');

//     let hallticketno = req.query.hallticketno.toString().toUpperCase();

//     let year = parseInt(req.query.year);

//     let semester = parseInt(req.query.semester);

//     try{

//         let connection = oracledb.getConnection({

//             user:'system',
//             password:'Ganga2820',
//             connectString:'localhost/orcl'
//         })
//     }

// })

app.listen(3000,()=>{console.log("server is running on port 3000 .....")})



