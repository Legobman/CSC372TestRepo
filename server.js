//server.js
"use strict";
const express = require("express");
const app = express();
app.use(express.static("public"));




app.get("/home", function (req, res) {
    res.send("Hello, World from Express!");
});

app.get("/hello", function (req, res) { 
  res.type("text");
  res.send("Hello from /hello! ");
});

app.get("/greeting", function (req, res) {
  res.set("Content-Type", "application/json");
  res.send({ "msg" : "Hello, from greeeting!" });  
});

//http://localhost:3000/states/nc/cities/greensboro
//http://localhost:3000/states/pa/cities/pittsburgh
app.get("/states/:state/cities/:city", function (req, res) {
    res.type("text");
    console.log(req.params);
    res.send("You sent a request for " + req.params.city + ", "
        + req.params.state);
});
// http://localhost:3000/cityInfo?state=nc&city=greensboro
// http://localhost:3000/cityInfo?state=pa&city=pittsburgh
app.get("/cityInfo", function (req, res) {
    
    res.header("Access-Control-Allow-Origin", "*");

    let state = req.query.state;
    let city = req.query.city;
    res.json({ "state": state, "city": city });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Example app listening on port: '+PORT+"!");
});

