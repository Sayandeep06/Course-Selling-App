const express = require("express")
const courseRouter = express.Router();
const { courseModel } = require("../db")

courseRouter.get('/preview',(req,res)=>{
  res.json({
    message: "Course preview"
  })
})

courseRouter.post('/purchase',(req,res)=>{
  res.json({
    message: "Purchase here"
  })
})

module.exports = {
  courseRouter,
};