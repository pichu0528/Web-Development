var express    = require("express"),
    app        = express(),
    bodyparser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground.js"),
    Comment    = require("./models/comment"),
    seedDB     = require("./seeds");
    
/*Connecting to Mongo Database*/
mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useNewUrlParser: true });


    
// var campgrounds = [
//     {name: "Mountain", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/1200px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg"},
//     {name: "Ocean", image:"https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg"},
//     {name: "Jungle", image:"https://www.geckosadventures.com/sites/geckos/files/styles/low-quality/public/elements/product/hero/ecuador-amazon-jungle-river.jpg"},{name: "Mountain", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/1200px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg"},
//     {name: "Ocean", image:"https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg"},
//     {name: "Jungle", image:"https://www.geckosadventures.com/sites/geckos/files/styles/low-quality/public/elements/product/hero/ecuador-amazon-jungle-river.jpg"},{name: "Mountain", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/1200px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg"},
//     {name: "Ocean", image:"https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg"},
//     {name: "Jungle", image:"https://www.geckosadventures.com/sites/geckos/files/styles/low-quality/public/elements/product/hero/ecuador-amazon-jungle-river.jpg"}
// ];

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "ejs");
//seedDB();

app.get("/", function(req,res){
   res.render("landing"); 
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }
    })
    // res.render("campgrounds",{campgrounds:campgrounds});
});

// CREATE - add campground to DB
app.post("/campgrounds", function(req,res){
   // get data from form and add to campgrounds array
   var name= req.body.name;
   var image=req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};
   // Create a new campground and save to DB
   Campground.create(newCampground, function(err,newlyCreated){
       if(err){
           console.log(err);
       }
       else{
           res.redirect("/campgrounds");
       }
   });
   // campgrounds.push(newCampground);
   // redirect back to campgrounds page
   // res.redirect("/campgrounds");
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req,res){
   res.render("campgrounds/new"); 
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req,res){
    // find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec( function(err,foundCampground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// ===============================
// Comment Routes
// ===============================

app.get("/campgrounds/:id/comments/new", function(req,res){
    // Find campground by id
    Campground.findById(req.params.id, function(err,campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new",{campground:campground});
        }
    });
    
});

app.post("/campgrounds/:id/comments", function(req,res){
    // Lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }else{
            // Create new comment
            Comment.create(req.body.comment, function(err,comment){
                if(err){
                    console.log(err);
                }else{
                    // Connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    // Redirect to campground showpage
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Started"); 
});