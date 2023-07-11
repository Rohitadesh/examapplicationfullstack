const express= require('express')
const app=express();
const mysql=require('mysql')
const port = process.env.PORT || 5000;
const fs= require('fs');
const cors = require("cors");
// app.get('/',(req,res)=>{
//     res.send()
// })
app.use(cors())
app.post('/',(req,res)=>{
    async function database(){
        const pool=  await mysql.createPool({host:'localhost', user: 'root', database: 'questionbank'}) 
    const 
    }
    
    
})
app.set('port', (5000));
app.listen(port,()=>{
    console.log("port 5000")
})