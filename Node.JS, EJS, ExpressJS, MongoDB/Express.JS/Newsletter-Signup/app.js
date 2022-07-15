const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//to make a folder static
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/failure", function(req, res) {
    res.redirect("/");
});

app.post("/", function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const appId = "10342448bfca5946cd8e09ade754608c-us14";
    const failureAppId = "9910342448bfca5946cd8e09ade754608c-us14";
    const listId = "0f0b798cb3";

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };
    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/" + listId;
    const options = {
        method: "POST",
        auth: "anyStringAsUserName:" + appId
    }

    const request = https.request(url, options, function(response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(d) {
            //console.log(JSON.parse(d));
        })
    });

    request.write(jsonData);
    request.end();

    //console.log(JSON.stringify(request));

    //res.send("ok");
});

//listen to 3000 port
//to run, type node server.js using command prompt
//then navigate to http://localhost:3000/
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
});