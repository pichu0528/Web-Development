var mongoose = require("mongoose");
var Campground = require("./models/campground.js");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image:"https://farm4.staticflickr.com/3487/3753652204_a752eb417d.jpg",
        description: "Blah Blah Blah"
    },
    {
        name: "Desert Mesa", 
        image:"https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg",
        description: "Blah Blah Blah"
    },
    {
        name: "Canyon Floor", 
        image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
        description: "Blah Blah Blah"
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log("Removed Campgrounds!"); 
        }
    });
    // Add a few campgrounds
    data.forEach(function(seed){
       Campground.create(seed, function(err, campground){
           if(err){
               console.log(err);
           }else{
               console.log("Added campground");
               // Create a comment
               Comment.create({
                   text:"This place is great",
                   author:"Pin"
               }, function(err, comment){
                   if(err){
                       console.log(err);
                   }else{
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment");
                   }
               });
           }
       }); 
    });
}

module.exports = seedDB;
