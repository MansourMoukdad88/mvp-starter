var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://moukdad:mnmnmn123456789@ds115244.mlab.com:15244/share');
//mongodb://moukdad:mnmnmn123456789@ds115244.mlab.com:15244/share
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  name: String,
  title: String,
  text: String
});

var User = mongoose.model('User', userSchema);

var save = function(data ,callback) {
  

  var user = new User(data);

  user.save(function(err){
    if(err){
      callback(err,null);
    }else{ 
      console.log('database data',data)
    callback(null,data);
  }
  })
};


module.exports.User = User;
module.exports.save = save;