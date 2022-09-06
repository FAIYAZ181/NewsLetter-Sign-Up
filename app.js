
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(bodyParser({extendeded:true}));

app.listen(3000,function(req,res){
  console.log("server is running on port 3000");
});
