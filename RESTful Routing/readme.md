# RESTful Routing

# Introduction
* Define REST and explain why it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD(Create, Read, Update, Delete)

CREATE   
READ     /readAllBlog
UPDATE   /updateBlog/:id
DESTROY  /destroyBlog/:id

RESTful Routes
==============
name       path           HTTP Verb     Purpose
----------------------------------------------------------
Index      /dogs          GET           List all dogs
New        /dogs/new      GET           Show new dog form
Create     /dogs          POST          Create a new dog, then
                                        redirect somewhere
Show       /dogs/:id      GET           Show info about one
                                        specific dog
Edit       /dogs/:id/edit GET           Show edit form for one
                                        dog
Update     /dogs/:id      PUT           Update a particular dog,
                                        then redirect somewhere
Destroy    /dogs/:id      DELETE        Delete a particular dog,
                                        then redirect somewhere
                                        
# Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template

# Basic Layout
* Add header and footer partials
* Include semantic UI
* Add simple nav

# Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

# SHOWtime
* Add SHOW route
* Add SHOW template
* Add links to show page
* Style SHOW template

# Edit/Update
* Add EDIT route
* Add EDIT form
* Add UPDATE route
* Add UPDATE form
* Add method-override(it's an npm that we can install), ie appending ?_method=PUT to the action in the form.
* findByIdAndUpdate(id, newData, callback)

# DESTROYYYY
* Add DESTROY route
* Add EDIT and DESTROY links

# Final Update
* Sanitize blog body
* Style Index
* Update REST table