const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

const newItem = ["Buy Food", "Cook Food", "Eat Food"];
const workItem = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    const day = date.getDay();

    //ejs will look for "list.ejs" inside the "views" folder
    res.render('list', { listTitle: day, newListItem: newItem });
});

app.post("/", function(req, res) {

    if (req.body.list === "Work") {
        workItem.push(req.body.newItem);
        res.redirect("/work");
    } else {
        newItem.push(req.body.newItem);
        res.redirect("/");
    }

});

app.get("/work", function(req, res) {
    res.render('list', { listTitle: "Work List", newListItem: workItem });
});


app.get("/about", function(req, res) {
    res.render('about');
});

//listen to 3000 port
//to run, type node server.js using command prompt
//then navigate to http://localhost:3000/
app.listen(3000, function() {
    console.log("Server started on port 3000");
});