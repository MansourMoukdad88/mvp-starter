var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var items = require('../database-mongo');

var app = express();
app.use(bodyParser.urlencoded({extended: true}))

// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
 app.use(express.static(__dirname + '/../node_modules'));
//=================================================================
/*app.get('/', function(req, res) {
	res.send("home page");
});

app.get('/moments', function(req, res) {
	res.send("moments page");
});*/

//=================================================================
app.get('/items', function (req, res) {

  	console.log( "AAAAAAAAA", req.body)
  
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


