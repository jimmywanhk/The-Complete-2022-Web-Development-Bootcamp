const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    const query = req.body.cityName;
    const unit = "metric";
    const apiKey = "4091e8d8f47912296aeb9f98f84093a6";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;

    https.get(url, function(response) {
        console.log(response);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            const iconURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

            res.write("<p>The weather is currently " + weatherDesc + "</p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius</h1>");
            res.write("<img src=" + iconURL + ">");
            res.send();
        })
    });
});

//listen to 3000 port
//to run, type node server.js using command prompt
//then navigate to http://localhost:3000/
app.listen(3000, function() {
    console.log("Server started on port 3000");
});