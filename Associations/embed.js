var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo",{ useNewUrlParser: true });

// Post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// User - email, name
var userSchema = new mongoose.Schema({
    email:String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email:"harry@potter.edu",
//     name: "Harry Potter"
// });

// newUser.posts.push({
//     title: "How to work your wand",
//     content: "Whatever!"
// });

// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// })

User.findOne({name:"Harry Potter"}, function(err,user){
   if(err){
       console.log(err);
   } else{
       user.posts.push({
           title:"Hello",
           content:"Say Hi back!"
       });
       user.save(function(err,user){
          if(err){
              console.log(err);
          } else{
              console.log(user);
          }
       });
   }
});