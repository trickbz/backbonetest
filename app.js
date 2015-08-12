/// <reference path="typings/node/node.d.ts"/>
var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.listen(3000, function() {
	console.log("http://localhost:3000 server is up and running...");
});