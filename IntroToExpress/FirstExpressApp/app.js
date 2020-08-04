var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req,res){
   res.send("Hi there!"); 
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
   res.send("Goodbye!"); 
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
   res.send("MEOW!"); 
});

app.get("/r/:subredditName", function(req,res){
    console.log(req.params);
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " Subreddit!");
});

app.get("/r/:subredditname/comments/:id/:title/", function(req,res){
    console.log(req.params);
    res.send("Welcome to the comment page!");
});

app.get("*" , function(req,res){
    res.send("You are a star!");
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});