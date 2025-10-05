import express from "express"
import {Worker} from "node:worker_threads"



const app=express();


app.get("/heavy",(req,res)=>{
    const worker=new Worker("./worker.js")
    worker.on("message",(msg)=>{
        res.json({message:msg})
    })
})

app.get("/light",(req,res)=>{
    res.json({message:"i am light request i am done instantly"})
})








app.listen(3000,()=>{
    console.log("app is listening on the port 3000")
})