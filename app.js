var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var portNumber = 8123;

var port = process.env.PORT || portNumber;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

var index = require('./routes/index');
app.use('/', index);

app.listen(port);

console.log('A cannone!!! porta: ' + port);

module.exports = app;

/*

	Avviare il server con: 
		$ node app

	la home è visibile dagli url:
	- http://localhost:8123/myAppName/
	- http://localhost:8123/

*/