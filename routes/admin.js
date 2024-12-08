const express = require("express")
const adminRouter = express.Router();
const { adminModel } = require("../db");

adminRouter.post('/signin',(req,res)=>{
  res.json({
    message: "admin signin" 
  })
})

adminRouter.post('/signup',(req,res)=>{
  res.json({
    message: "admin signup"
  })
})

adminRouter.post('/course',(req,res)=>{
  res.json({
    message: "create courses"
  })
})

adminRouter.put('/course',(req,res)=>{
  res.json({
    message: "create courses"
  })
})

adminRouter.get('/course',(req,res)=>{
  res.json({
    message: "create courses"
  })
})

module.exports = {
  adminRouter
};