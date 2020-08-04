# Rendering HTML and Templates
* Use res.redner() to redner HTML(from an EJS file)
* Explain what EJS is and why we use it
* Pass variables to EJS templates

# EJS Control Flow
* Show examples of control flow in EJS templates
* Write if statements in an EJS file
* Write loops in an EJS file

Loop through all posts
    make an entry div
        title
        tagline
        ...
        
# Styles and Partials (EJSDemo)
* Show how to properly include public assets
- app.use(express.static("public"));
* Properly configure our app to use EJS
- app.set("view engine", "ejs");
* Use partials to dry up our code!
- <%include partials/header%>
- <%include partials/footer%>

# Post Requests! (EJSDemo/PostRequestDemo)
* Write post routes, and test them with Postman
app.post("/addfriend", function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});
* Use a form to send a post request
* Use body parser to get form data
var bodyparser = require("body-parser");
...
app.use(bodyparser.urlencoded({extended:true}));
...
<form action="/addfriend" method="POST">
    <input type="text" name="newfriend" placeholder="name">
    <button>I made a new friend!</button>
</form>