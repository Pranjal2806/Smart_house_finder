const express=require("express");
const app=express();
const  port=3000;
app.set("view engine","ejs");//view -> templates

app.get("/",(req,res) =>{
    res.send("this  is  root");
})
app.listen(port,()=>{
    console.log(`Listinig  on  port ${port}`);
})