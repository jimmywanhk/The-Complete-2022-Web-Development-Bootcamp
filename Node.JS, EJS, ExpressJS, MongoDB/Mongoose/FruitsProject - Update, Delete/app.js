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

const Fruit = mongoose.model("Fruit", fruitSchema);

/*Fruit.updateOne({ _id: "624175415e6a35520985adf1" }, { name: "New Apple" }, function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
});*/

/*Fruit.deleteOne({ _id: "624174d3f22284f84c937592" }, function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
});*/

/*Fruit.deleteMany({ name: "Peach" }, function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
});*/

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits.map(a => a.name));
    }
    mongoose.connection.close();
});