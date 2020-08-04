var mongoose = require("mongoose");
var Campground = require("./models/campground.js");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image:"https://farm4.staticflickr.com/3487/3753652204_a752eb417d.jpg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
        name: "Desert Mesa", 
        image:"https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
    },
    {
        name: "Canyon Floor", 
        image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
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
