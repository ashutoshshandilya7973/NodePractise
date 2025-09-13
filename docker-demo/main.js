const express=require('express');

const app=express()

app.get('/',(req,res)=>{
    res.send("hello docker")
})


const Port=process.env.PORT||5000;

app.listen(Port,()=>{
    console.log(`app is listen on the port ${Port}`)
})