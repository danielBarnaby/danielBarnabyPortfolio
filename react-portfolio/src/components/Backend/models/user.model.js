const mongoose = require("mongoose");
const { Schema } = mongoose;


// userMessageInfo Data Model
const userMessageInfoSchema = new Schema({
    id: Number,
    userMessage: String
})
 
// 'User' Model.
const userSchema = new Schema({
  name : {
    type: String,
    require: true
  },
  email : {
   type: String,
   require: true
 },
 message : [userMessageInfoSchema]
//  message : {
//   type: String,
//   require: true
// }
   
},{ collection: 'userMessageInfo'}) // END 'User' Prototype.

let User = mongoose.model('User', userSchema);

module.exports = User