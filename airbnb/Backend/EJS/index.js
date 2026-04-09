const express=require("express");
const path=require("path");
const app=express();
const port=3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.get("/", (req,res)=>{
    res.render("home");
});
app.get("/ig/:username",(req,res)=>{
    const instaData = require("./data.json");
    let { username } = req.params;
    console.log(instaData);
    const data = instaData[username];
    if(data)
    {
        res.render("instagram",{data});
    } 
    else{
        res.render("Errors");
    }
    
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
