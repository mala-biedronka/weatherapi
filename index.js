const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

    app.post("/", function (req, res) {
        const query = req.body.cityName;
        const apiKey = "68bad42650b6de20396b2ba0c4520d6c";
        const units = "metric";
        const externalUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

        https.get(externalUrl, function (response) {
            console.log(response.statusCode);
            response.on("data", function (data) {
                //Parse data into JavaScript Object
                const weatherData = JSON.parse(data);
                const temp = weatherData.main.temp;
                const descript = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

                res.write("<p>The weather currently is " + descript + "</p>");
                res.write("<h1>The current temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
                res.write("<img src=" + imageURL + ">");
                res.send();
            })
        });
    })
})



app.listen(3000 , function () {
    console.log("Server is running on the port 3000.")
})




