const express = require("express")
const userRouter = express.Router();
const { userModel } = require("../db")
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config")

userRouter.get('/purchases',(req,res)=>{
  res.json({
    message: "Purchases printed"
  })
})

userRouter.post('/signup',async(req,res)=>{
  const { email, password, firstName, lastName } = req.body;
  //Add zod validation in the code 
  //hash the password do that the plain text password is not stored int eh db
  try {
    await userModel.create({
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

userRouter.post('/signin',async(req,res)=>{
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
    password: password
  });
  if(user){
    const token = jwt.sign({
      id: user._id
    }, JWT_USER_PASSWORD);
    
    res.json({
      token: token
    })
  }else{
    res.status(403).json({
      message: "Incorrent credentials"
    })
  }
})
 
module.exports = {
  userRouter
};