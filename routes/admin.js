const express = require("express")
const adminRouter = express.Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post('/signin',async(req,res)=>{
  const { email, password } = req.body;
  const user = await adminModel.findOne({
    email: email,
    password: password
  });
  if(user){
    const token = jwt.sign({
      id: user._id
    }, JWT_ADMIN_PASSWORD);
    
    res.json({
      token: token
    })
  }else{
    res.status(403).json({
      message: "Incorrent credentials"
    })
  }
})

adminRouter.post('/signup',async(req,res)=>{
  const { email, password, firstName, lastName } = req.body;
  //Add zod validation in the code 
  //hash the password do that the plain text password is not stored int eh db
  try {
    await adminModel.create({
      email,
      password,
      firstName,
      lastName
    })
    res.json({
      message: "Signup successfull" 
    })
  }catch(e){
    console.log(e);
    res.json({
      message: "invalid credentials or some error"
    })
  }
})

adminRouter.post('/course',adminMiddleware, async (req,res)=>{
  const adminId = req.userId;
  const { title, description, imageUrl, price } = req.body;
  const course = await courseModel.create({
    title,
    description,
    imageUrl,
    price,
    creatorId : adminId
  })
  res.json({
    message: "Course Created",
    courseId : course._id
  })
})

adminRouter.put('/course',adminMiddleware, async(req,res)=>{
  const adminId = req.userId;
  const { title, description, imageUrl, price, courseId} = req.body;
  const course = await courseModel.updateOne({
    _id: courseId,
    creatorId: adminId
  },{
    title,
    description,
    imageUrl,
    price,
  })
  res.json({
    message: "Course updated",
    courseId : course._id
  })
})

adminRouter.get('/course/bulk', adminMiddleware, async(req,res)=>{
  const adminId = req.userId;
  const courses = await courseModel.find({
    creatorId: adminId
  });
  res.json({
    courses
  })
})

module.exports = {
  adminRouter
};