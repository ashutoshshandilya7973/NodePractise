import express from "express"
import { globalErrorMiddleware } from "./middleware/globalError.middleware.js";
import { nextUse } from "./middleware/demo.middleware.js";
const app=express();

app.use(express.json());


// app.all("/user/{*splat}",(req,res,next)=>{
//     console.log("every route is go through me")
//     next()
// })

app.get("/user/:id/suhani/:roll",nextUse,(req,res)=>{
    console.log("hello from the server")
    res.json({message:"you are on the / path"})
})

app.get("/user/profile",(req,res)=>{
    console.log("hello from the server")
    res.json({message:"you are on the lund path"})
})



app.use(globalErrorMiddleware)

app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})