const express= require('express')
const app=express();
const port = process.env.PORT || 5000;
const fs= require('fs');
const cors = require("cors");
// app.get('/',(req,res)=>{
//     res.send()
// })
app.use(cors())
app.post('/',(req,res)=>{
    let file=req.body.file
    console.log(file);  
    fs.readFile(file,"utf-8",(error,data)=>{
        // console.log(error)
        if (error) throw err
        console.log(data)
    })
    
})
app.set('port', (5000));
app.listen(port,()=>{
    console.log("port 5000")
})