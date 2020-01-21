var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
   name: String,
    dob: Date,
    college_id:String,
    email:String,
    mobile:Number,
    place:String,
    username:String,
    password:String
   
  });
  var userModel = mongoose.model('UserModel', UserSchema,"Users" );
  module.exports=userModel;