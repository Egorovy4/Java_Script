var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.listen(3000);

server.get("/", function(request, response) {
	console.log('Start page is running !');
	response.send("<h1>Welcome !</h1>");
});

server.get("/userGet", function(request, response) {
	console.log(request.query);
	response.send("Successfully GET : " + JSON.stringify(request.query));
});

server.post("/userPost", function(request, response) {
	console.log(request.body);
	response.send("Successfully POST : " + JSON.stringify(request.body));
});