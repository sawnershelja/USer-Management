   

const mysql = require('mysql');

const express = require('express');

var app = express();

const bodyparser = require('body-parser');
const { compileFunction } = require('vm');



app.use(bodyparser.json());



//Connect database server

var con = mysql.createConnection({

    host: 'localhost',

    user: 'root',

    password: '',

    database: 'mydb',

   // multipleStatements: true

});



con.connect((err) => {

    if (!err)

        console.log('DB connection succeded.');

    else

        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));

});



//created table in MySQL DB

  var sql = "CREATE TABLE user (firstname VARCHAR(255), lastname VARCHAR(255),mobile VARCHAR(10) ,gender VARCHAR(255),username VARCHAR(255))";

  con.query(sql, function (err, result) {

    if (err);

    console.log("Table created");

  });





app.listen(3000, () => console.log(`Express server is runnig at port no : http://localhost:3000`));


app.get('/',(req,res)=>{
res.send('Hello');
})


//Get all userdetails

app.get('/user', (req, res) => {

    con.query('SELECT * FROM user', (err, rows, fields) => {

        if (!err)

            res.send(rows);

        else

            console.log(err);

    })

});



//fetch user details through username

app.get('/user/:username', (req, res) => {

    con.query('SELECT * FROM user WHERE username= ?', [req.params.username], (err, rows, fields) => {

        if (!err)

            res.send(rows);

        else

            console.log(err);

    })

});







//create user 

app.post('/user/add', (req, res) => {

    firstname= req.body.firstname, lastname = req.body.lastname, mobile = req.body.mobile, gender = req.body.gender, username = req.body.username 

      con.query("INSERT INTO user (firstname, lastname, mobile, gender, username) VALUES ?",[[[firstname, lastname, mobile, gender, username]]], (err, rows, fields) => { 

      if (!err)

          res.send('1 record inserted');

      else

          console.log(err);

  })

});



//fetch user details with limit

app.get('/user/limit', (req, res) => {

  con.query('SELECT * FROM user LIMIT 2',(err, rows, fields) => {

      if (!err)

          res.send(rows);

      else

          console.log(err);

  })  

})
