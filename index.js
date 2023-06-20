const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12627403",
    password: "b42p9Qtx6u",
    database: "sql12627403"
});

app.post("/save", (req,res)=>{
    let data = [req.body.name, req.body.company, req.body.pkg];
    let sql = "INSERT INTO `student` values(?, ?, ?)";
    con.query(sql, data, (err,result)=>{
        if(err) res.send(err);
        else  res.send(result);
    });
});

app.listen(5000, ()=>{console.log("Ready to serve @ 5000")});
