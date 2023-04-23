const express=require("express");

const app=express();
const port=4000||port.env;

app.get("/",(req,res)=>{
    res.send("<h5>Hello boi</h5>")
})


app.listen(port,()=>{
    console.log("Server is working on port ",port);
})