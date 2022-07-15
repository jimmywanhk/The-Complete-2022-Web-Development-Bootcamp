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

const peach = new Fruit({
    rating: 10,
    review: "Very Good!"
});
peach.save();