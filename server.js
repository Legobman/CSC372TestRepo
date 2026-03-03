//server.js
"use strict";
const express = require("express");
const app = express();

app.get("/home", function (req, res) {
    res.send("Hello, World from Express!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Example app listening on port: '+PORT+"!");
});

app.get("/hello", function (req, res) { 
  res.type("text");
  res.send("Hello from /hello! ");
});

app.get("/greeting", function (req, res) {
  res.set("Content-Type", "application/json");
  res.send({ "msg" : "Hello, from greeeting!" });  
});
