var express       = require("express"),
    app           = express(),
    bodyparser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground    = require("./models/campground.js"),
    Comment       = require("./models/comment"),
    User          = require("./models/user"),
    seedDB        = require("./seeds");

// Requiring Routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index");
    
/*Connecting to Mongo Database*/
mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useNewUrlParser: true });

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); // linking CSS stylesheet
//seedDB();

// Passport Configuration
app.use(require("express-session")({
    secret: "This can be anything that we want",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware - Passing {currentUser: req.user} into every route
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

// Ask the app to use the three routes
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Started"); 
});