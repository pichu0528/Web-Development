var express = require("express");
var app = express();

// Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!");
});

// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/cow" should print "The cow says 'Moo'"
// Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
app.get("/speak/:animal", function(req,res){
    var animal = req.params.animal.toLowerCase();
    var sound = {
        "pig":"Oink",
        "cow":"Moo",
        "cat":"Meow",
        "dog":"Woof Woof!",
        "me":"yes"
    };
    
    res.send("The " + animal + " says '" + sound[animal] + "'");
});

// Visiting "/repeat/hello/3" should print "hello hello hello"
// Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
// Visitng "/repeat/blah/2" should print "blah blah"
app.get("/repeat/:word/:num", function(req,res){
    // var num = Number(req.params.num);
    var num = parseInt(req.params.num);
    var str = req.params.word;
    var prtstr = "";
    for(var i = 0; i < num; i++){
         prtstr += str + " "; 
    }
    res.send(prtstr);
});

// If a user visits any other route, print:
app.get("*", function(req,res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});