const express=require("express")
const userRouter = require("./routes/userRoutes")
const noteRouter = require("./routes/notesRoutes")
const app=express()

app.use("/users",userRouter)
app.use("/notes",noteRouter)
app.get("/",(req,res) =>{
    res.send("hello")
})

app.listen(5000,() =>{
    console.log("Server started at port 5000")
})