const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect("");


const userSchema = new mongoose.Schema({
  firstName : String, 
  lastName : String,
  email: { type: String, unique: true },
  password : String
})

const adminSchema = new mongoose.Schema({
  firstName : String, 
  lastName : String,
  email: { type: String, unique: true },
  password : String
})

const courseSchema = new mongoose.Schema({
  title: String, 
  description: String, 
  price: Number,
  imageUrl : String,
  creatorId: ObjectId
})

const purchaseSchema = new mongoose.Schema({
  courseId : ObjectId,
  userId: ObjectId
})

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const purchaseModel = mongoose.model('purchase', userSchema);
const courseModel = mongoose.model('course', userSchema);

module.exports={
  userModel,
  adminModel,
  purchaseModel,
  courseModel
}