const express = require("express");
const app = express();

//GET Method, 2 parameters, 1 for request, 1 for response
app.get("/", function(req, res) {
    console.log(req);
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
    res.send("<h1>Contact me at: xxx@hotmail.com</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h1>Copy right @ Jimmy</h1>");
});

app.get("/hobbies", function(req, res) {
    res.send("This is hobbies page.");
});

//listen to 3000 port
//to run, type node server.js using command prompt
//then navigate to http://localhost:3000/
app.listen(3000, function() {
    console.log("Server started on port 3000");
});