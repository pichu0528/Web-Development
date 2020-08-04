var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

// Compile catSchema into modeling object
var Cat = mongoose.model('Cat', catSchema);

// adding a new cat to the db
// Method1:
// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 100,
//   temperament: "Evil"
// });
// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
//     }
//     else{
//         console.log("We just saved a cat to the db");
//         console.log(cat);
//     }
// });

// Method2
// Cat.create({
//     name:"Fire",
//     age: 3,
//     temperament:"FYA"
// }, function(err,cat){
//     if(err){
//         console.log("ERRROR");
//         console.log(err);
//     }
//     else{
//         console.log("Just added");
//         console.log(cat);
//     }
// });

// retrieve all catsfromthedb and console.log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no");
        console.log(err);
    }
    else{
        console.log("All the cats...");
        console.log(cats);
    }
});