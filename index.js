// const express = require("express");
//
// const https = require("https");
//
// const app = express();
//
// app.get("/", function (req, res) {
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=68bad42650b6de20396b2ba0c4520d6c&units=metric";
//
//     https.get(url, function (response) {
//         console.log(response.statusCode);
//         response.on("data", function (data) {
//         const weatherData = JSON.parse(data);
//         const temp = weatherData.main.temp;
//         const descript = weatherData.weather[0].description;
//         const weatherIcon = weatherData.weather[0].icon;
//         const imageURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
//         res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>");
//         res.write("<p>The weather is currently " + descript + "</p>");
//         res.write("<img src=" + imageURL + ">");
//         res.send();
//
//         });
//     });
// });
//
// app.listen(3000, function () {
//     console.log("Server is running on port 3000.");
// });



//Creating a server
const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.send("Hi there!");
});

app.get("/contacts", function (req, res) {
    res.send("Contact me at github");
});

app.get("/about", function (req, res) {
    res.send("I am a Junior Front-end Developer");
})

app.listen(3000, function () {
    console.log("Server started on port 3000.")
});
