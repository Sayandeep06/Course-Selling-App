const express = require("express")
const userRouter = express.Router();
const { userModel } = require("../db")

userRouter.get('/purchases',(req,res)=>{
  res.json({
    message: "Purchases printed"
  })
})

userRouter.post('/signin',(req,res)=>{
  res.json({
    message: "user signin" 
  })
})

userRouter.post('/signup',(req,res)=>{
  res.json({
    message: "user signup"
  })
})

module.exports = {
  userRouter
};