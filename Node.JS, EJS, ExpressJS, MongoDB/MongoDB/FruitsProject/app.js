const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URI
const uri = "mongodb://localhost:27017";

const dbName = "fruitsDB";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    // Connect the client to the server
    await client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);

        /*insertDocuments(db, function() {
            client.close();
        });*/

        findResult(db, function() {
            client.close();
        });
    });
}
run().catch(console.dir);

/*const insertDocuments = function(db, callback) {
    const collection = db.collection("fruits");
    collection.insertMany(
        [{
                name: "Apple",
                score: 8,
                review: "Greate fruit"
            },
            {
                name: "Orange",
                score: 6,
                review: "Kinda sour"
            },
            {
                name: "Banana",
                score: 9,
                review: "Great stuff!"
            },
        ],
        function(err, result) {
            //console.log(result);
            //assert.equal(err, null);
            //assert.equal(3, result.result.n);
            //assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents");
            callback(result);
        }
    );
}*/

const findResult = function(db, callback) {
    const collection = db.collection("fruits");
    collection.find({}).toArray(function(err, fruits) {
        console.log(fruits);
        callback(fruits);
    });
}