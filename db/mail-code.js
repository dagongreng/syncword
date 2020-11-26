var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmailCodeSchema = new Schema({
  code:  String,
  mail:  String,
  password: String,

});

module.exports = mongoose.model('mailcode', EmailCodeSchema);