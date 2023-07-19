const express= require('express')
const app=express();
const mysql=require('mysql')
const port = process.env.PORT || 5000;
const fs= require('fs');
const cors = require("cors");
const { error } = require('console');
app.get('/',(req,res)=>{
    res.send()
})
app.use(cors())
app.post('/',(req,res)=>{
    let questions=req.body   
    console.log(questions)
    // console.log("helloworld")
const pool=mysql.createPool({
    host:'localhost', user: 'root',
    password:'root', 
    database: 'exam'
})
let db=`INSERT INTO question(questions) VALUES ("${questions}")`
pool.query(db,(error,res)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(res)
    }
    
})    


})

app.set('port', (5000));
app.listen(port,()=>{
    console.log("port 5000")
})