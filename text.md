var express = require("express");
var http = require("http");
var app = express();

// Ping The Apps.
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    response.sendStatus(200);
});

// Request Listeners.
var listener = app.listen(process.env.PORT, function () {
    console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 270000);

36 require("./uptime.js");

 let channel = message.guild.channels.cache.find(x => x.name === "suggestion" || x.name === "suggestions");

    if (!channel) {
      return message.channel.send("there is no channel with name - suggestions");
    }

 message.channel.send("Sent Your Suggestion to " + `${channel}`);
