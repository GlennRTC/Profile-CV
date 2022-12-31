const express = require("express");
const bodyParser = require("body-parser");
const { nextTick } = require("process");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("main");
})

app.get("/projects", function(req, res){
    res.render("projects");
})

app.listen(3000, function(){
    console.log("Server has started successfully");
})
