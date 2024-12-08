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

adminRouter.post('/',(req,res)=>{
  res.json({
    message: "create courses"
  })
})

adminRouter.put('/',(req,res)=>{
  res.json({
    message: "create courses"
  })
})

adminRouter.get('/bulk',(req,res)=>{
  res.json({
    message: "create courses"
  })
})

module.exports = {
  adminRouter
};