//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//localhost
//mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true });

mongoose.connect("mongodb+srv://jimmywanhk:6ZPEN2wGRZYxWTAm@cluster0.gpq1q.mongodb.net/todolistDB?retryWrites=true&w=majority", { useNewUrlParser: true });

const itemSchema = {
    name: String
}

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({ name: "Welcome to your todolist!" });
const item2 = new Item({ name: "Hit the + button to add a new item." });
const item3 = new Item({ name: "<-- Hit this to delete an item." });

const defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemSchema] //array of Item
};

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {
    Item.find({}, function(err, docs) {
        if (docs.length === 0) {
            Item.insertMany(defaultItems, function(err) {
                if (err)
                    console.log(err);
                else
                    console.log("success");
            });
            res.redirect("/");
        } else {
            res.render("list", { listTitle: "Today", newListItems: docs });
        }
    });
});

app.post("/", function(req, res) {
    const itemName = req.body.newItem;
    const listTitle = req.body.list;
    const newItem = new Item({ name: itemName });

    if (listTitle === "Today") {
        newItem.save();
        res.redirect("/");
    } else {
        List.findOne({ name: listTitle }, function(err, docs) {
            if (!err) {
                if (docs) {
                    docs.items.push(newItem);
                    docs.save();
                    res.redirect("/" + listTitle);
                }
            }
        });
    }
});

app.post("/delete", function(req, res) {
    const checkedItemId = req.body.checkbox;
    const listTitle = req.body.list;

    if (listTitle === "Today") {
        Item.findByIdAndRemove(checkedItemId, function(err) { if (err) console.log(err); })
        res.redirect("/");
    } else {
        List.findOneAndUpdate({ name: listTitle }, { $pull: { items: { _id: checkedItemId } } }, function(err, results) {
            if (!err) {
                res.redirect("/" + listTitle);
            }
        });
    }
});


app.get("/:customListName", function(req, res) {
    const customListName = _.capitalize(req.params.customListName);
    List.findOne({ name: customListName }, function(err, docs) {
        if (!err) {
            if (!docs) {
                const list = new List({ name: customListName, items: defaultItems });
                list.save();
                res.redirect("/" + customListName);
            } else {
                res.render("list", { listTitle: customListName, newListItems: docs.items });
            }
        }
    });
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
});