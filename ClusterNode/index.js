import express from "express"
import cors from "cors"
const app=express()

app.use(express.json())

app.use(cors())

app.get("/heavy",(req,res)=>{
  console.log("request comes in heavy route");
  for(let i=0;i<9000000000;i++){
    continue;
  }
    
  res.json({message:"heavy task first ",})

})

app.get("/low",(req,res)=>{
    console.log("request is comes low route")
    res.json({message:"low task after heavy task"})
})




app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})