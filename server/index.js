var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var users = require('../database-mongo');

var app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
 app.use(express.static(__dirname + '/../node_modules'));
//=================================================================
/*app.get('/users', function(req, res) {
	res.send("home page");
});

app.get('/moments', function(req, res) {
	res.send("moments page");
});
*/
//=================================================================
app.post('/users',function(req,res){


  console.log('reqest :::::',req.body)
  users.save(req.body,function(err,data){
    if(err){
      
      console.error(err)

    }else{
      console.log('my  Data' ,data)
    res.send(data)
  } 
  })
})
app.get('/users', function (req, res) {
  users.User.find(function(err, data) {
    console.log(data)
    if(err) {
      res.sendStatus(500);
    } else {
  
      res.send(data);
    }
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port 3000!');
});


