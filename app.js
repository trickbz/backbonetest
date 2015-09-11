/// <reference path="typings/node/node.d.ts"/>
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var roremIpsum = "Lorem ipsum dolor sit amet, dicit quando oratio his ex, etiam civibus quo eu. Ne epicuri scaevola vel, postulant splendide usu no. No vix adhuc lobortis eleifend, qui malorum laboramus intellegat no. Mea deleniti voluptatibus definitionem te, ei tantas accusam mediocritatem ius. Ei sed aliquando expetendis, quo ei facer liber, eos facete audiam timeam eu. Dicat dicunt reformidans sit at, epicurei sensibus abhorreant ei mel, movet praesent referrentur mel ei. Probo solet accommodare ius an. Debet possit conclusionemque ei est, eam ut omnes interpretaris, pri virtute copiosae ne. Dicam efficiendi vix in. At tincidunt necessitatibus sed.";

var posts = [
	{ id: 1, title: 'Title 1', body: roremIpsum, createdOn: new Date() },
	{ id: 2, title: 'Title 2', body: roremIpsum, createdOn: new Date() },
	{ id: 3, title: 'Title 3', body: roremIpsum, createdOn: new Date() },
	{ id: 4, title: 'Title 4', body: roremIpsum, createdOn: new Date() },
	{ id: 5, title: 'Title 5', body: roremIpsum, createdOn: new Date() },
	{ id: 6, title: 'Title 6', body: roremIpsum, createdOn: new Date() },
	{ id: 7, title: 'Title 7', body: roremIpsum, createdOn: new Date() },
	{ id: 8, title: 'Title 8', body: roremIpsum, createdOn: new Date() },
	{ id: 9, title: 'Title 9', body: roremIpsum, createdOn: new Date() },
	{ id: 10, title: 'Title 10', body: roremIpsum, createdOn: new Date() }
];

var lastId = 3;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "html");
app.use(express.static(__dirname));

app.get("/posts", function (req, res) {
	res.send(posts);
});

app.post('/posts', function (req, res) {
	lastId++;
	var post = {
		id: lastId,
		title: req.body.title,
		body: req.body.body,
		createdOn: req.body.title
	};
	posts.push(post);
	res.send([]);
});

app.get('/posts/:id', function (req, res) {
	var id = req.params.id;
	var post = posts.filter(function (post) {
		return (post.id == id);
	});
	res.send(post);
});

app.delete('/posts:id', function (req, res) {
	var id = req.params.id;
	posts = posts.filter(function (post) {
		return (post.id != id);
	});
	res.send([]);
});

app.listen(3000, function () {
	console.log("http://localhost:3000 is up and running.");
});