const express = require("express");
const app = express();



app.get("/", (res, req)=>{
    req.send("Hello world")
})


app.listen(3000, (err)=>{
    if(!err){
        console.log("Server Run at Port 3000")
    }else{
        console.log("err", err)
    }
})