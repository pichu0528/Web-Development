var express = require("express");
var app = express();

// linking the stylesheet
app.use(express.static("public"));
// linking the ejs (aka embedded javascript) files
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
});

// /fallinlovewith/rusty - "You fall in love with Rusty"
app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love",{thingVar:thing});
});

app.get("/posts", function(req,res){
    var posts = [
        {
            title:"Post 1", 
            author:"Pin"
        },
        {
            title:"Post 2", 
            author:"Pin"
        },
        {
            title:"Post 3", 
            author:"Pin"
        }
    ];
    
    res.render("posts",{posts:posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!");
});