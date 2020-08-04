var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req,res){
   res.render("home"); 
});

app.post("/addfriend", function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

//create friends page
app.get("/friends",function(req,res){
    res.render("friends", {friends:friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!");
})