var express = require('express');
var router = express.Router();
var path = require('path');

	/* GET home page. */
	router.get('/', function(req, res) {
	  res.sendFile('index.html', { root: path.join(__dirname, '../public/myAppName') });
	});

	/* GET JSON. */
	router.get('/cosejson', function(req, res) {
	  res.json({ nome: 'Sima', cose: 'several things' });
	});
module.exports = router;