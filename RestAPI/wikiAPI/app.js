//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = {
    title: String,
    content: String
};

const Article = new mongoose.model("Article", articleSchema);

app.set('view engine', 'ejs');

//Postman: x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

//Chained Route Handler
app.route("/articles")
    .get(
        function(req, res) {
            Article.find({}, function(err, docs) {
                if (!err) {
                    res.send(docs);
                } else {
                    res.send(err);
                }
            });
        }
    )
    .post(
        function(req, res) {
            const newArticle = new Article({
                title: req.body.title,
                content: req.body.content
            });
            newArticle.save(function(err) {
                if (!err) {
                    res.send("ok");
                } else {
                    res.send(err);
                }
            });
        }
    )
    .delete(
        function(req, res) {
            Article.deleteMany(function(err) {
                if (!err) {
                    res.send("ok");
                } else {
                    res.send(err);
                }
            });
        }
    );

app.route("/articles/:articleTitle")
    .get(
        function(req, res) {
            Article.findOne({ title: req.params.articleTitle }, function(err, doc) {
                if (!err) {
                    res.send(doc);
                } else {
                    res.send(err);
                }
            });
        }
    )
    .put(
        function(req, res) {
            Article.replaceOne({ title: req.params.articleTitle }, { title: req.body.title, content: req.body.content }, function(err) {
                if (!err) {
                    res.send("ok");
                } else {
                    res.send(err);
                }
            });
        }
    )
    .patch(
        function(req, res) {
            Article.updateOne({ title: req.params.articleTitle }, { $set: { title: req.body.title, content: req.body.content } }, function(err) {
                if (!err) {
                    res.send("ok");
                } else {
                    res.send(err);
                }
            });
        }
    )
    .delete(
        function(req, res) {
            Article.deleteOne({ title: req.params.articleTitle }, function(err) {
                if (!err) {
                    res.send("ok");
                } else {
                    res.send(err);
                }
            });
        }
    );


app.listen(3000, function() {
    console.log("Server started on port 3000");
});