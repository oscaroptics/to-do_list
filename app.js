const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");

let newWork=[];
let workItem=[];


const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
    let day = date;
    res.render("lists", {ListTitle: day,newItem: newWork});
})

app.post("/", function(req, res){
    let newTask = req.body.task;
    if(req.body.lists === "work"){
        workItem.push(newTask);
        res.redirect("/work");
    } else {
        newWork.push(newTask);
        res.redirect("/");
    }
})

app.get("/work", function(req,res){
    res.render("lists", {ListTitle: "Work List", newItem: workItem});
})

app.listen(3001, function(){
    console.log("server is up and running on port 3001");
})