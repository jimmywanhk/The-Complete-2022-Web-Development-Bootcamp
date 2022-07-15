const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/fruitsDB";
mongoose.connect(uri, { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "There must be a name."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "Mango",
    rating: 9,
    review: "Great fruit."
});

//mango.save();

/*const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});*/

//person.save();

Person.updateOne({ name: "John" }, { favouriteFruit: mango },
    function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("success");
        }
    }
);