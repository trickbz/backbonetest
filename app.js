/// <reference path="typings/node/node.d.ts"/>
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var colors = [
	{ id: 1, name: 'red' },
	{ id: 2, name: 'green' },
	{ id: 3, name: 'blue' }
];

var lastId = 3;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "html");
app.use(express.static(__dirname));

app.get("/colors", function(req, res) {
	res.send(colors);
});

app.post('/colors', function(req, res) {
	lastId++;
	colors.push({id: lastId, name: req.body.name});
	res.send([]);
});

app.get('/colors/:id', function(req, res) {
	var id = req.params.id;
	var color = colors.filter(function(item) {
		return (item.id == id);
	});
	res.send(color);
});

app.delete('/colors:id', function(req, res) {
	var id = req.params.id;
	colors = colors.filter(function(item) {
		return (item.id != id);
	});
	res.send([]);
});

app.listen(3000, function() {
	console.log("http://localhost:3000 is up and running.");
});