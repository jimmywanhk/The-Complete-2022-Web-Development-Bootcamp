const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/fruitsDB";
mongoose.connect(uri, { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});
//apple.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const banana = new Fruit({
    name: "Banana",
    rating: 7,
    review: "Pretty solid as a fruit."
});

/*Fruit.insertMany([kiwi, banana], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
});*/

/*const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

person.save();*/

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits.map(a => a.name));
    }
    mongoose.connection.close();
});