var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{ useNewUrlParser: true });

var Post = require("./models/post.js");
var User = require("./models/user.js");

Post.create({
  title:"How to cook Part 4",
  content: "idfoisdufidf"
}, function(err,post){
    User.findOne({
        email:"bob@gmail.com"
    }, function(err,foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(post);
            foundUser.save(function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            })
        }
    });
    // console.log(post);
});

// User.create({
//     email:"bob@gmail.com",
//     name: "Bob B"
// });

// Find user
// Find all posts for that user
// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });