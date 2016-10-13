var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname));

var port = process.env.PORT || 8000;

app.listen(port, function(){
	console.log("App listening on port: ", port);
});