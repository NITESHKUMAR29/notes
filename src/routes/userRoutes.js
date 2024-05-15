const express=require("express")
const userRouter=express.Router()

userRouter.post("/signUp",(req,res) =>{
    res.send("signUp")
})
userRouter.post("/signIn",(req,res) =>{
    res.send("signIn")
})

module.exports=userRouter