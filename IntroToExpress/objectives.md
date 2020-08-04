#Introduction to Express

* What is a framework? How is it different from a library?
 The most important difference, and in fact the defining difference between a library and a framework is inversion of control.
 What does that mean? Well, it means when you call a library, you are in control. But with a framework, the control is inverted: the framework calls you.(This is called the Hollywood Principle: Don't call us, We'll call You.)
 Basically, all the control flow is already in the framework, and there's just a bunch of predefined white spots that you can fill out with your code.
 A library on the other hand is a collection of functionality that you can call.

* What is express? 
 One of the Node framework.
 Fast, unopinionated, minimalist web framework for Node.js

* Why are we using Express?
 Express is by far most popular node framework.
 Lighter weigh, meaning need to do more work on the coder's side.

#Our First Express App

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app!


#NPM Init and Package.json

* Use the '--save' flag to install packages
* Explain what the package.json file does
 It holds metadata of the application 
* Use 'npm init' to create a new package.json

#More Routing! (use FirstExpressApp/app.js)

* Show the '*' route matcher
 It is like a wildcard symbol for the browser if other get request are not in the code. 
 Usually, place it at the end of all the get requests.
* Write routes containing route parameters
 app.get("/r/:subredditName", function(req,res){
     res.send("Welcome to a subredditname!");
 });
 The colon here tells express not to match the pattern subrreditName. It tells Express that it is a parameter.




