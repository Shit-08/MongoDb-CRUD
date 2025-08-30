const express=require("express");
const app=express();
const mongoose=require("mongoose");

app.get('/',(req,res)=>{
    res.send("root is working")
})

app.listen(8080, ()=>{
    console.log("server is listening on port 8008");
})