import express from "express"
import os from "os"
import cluster from "cluster"


if(cluster.isPrimary){
    const cpuCoresCount=os.cpus().length;
    for(let i=0;i<cpuCoresCount;i++){
        cluster.fork()
    }

}else{
    const app=express()
    console.log(`i am runnig on the process ${process.pid}`)

    app.get("/",(req,res)=>{
        console.log("i am running a process")
        while(1){}
       return  res.json({message:"enjfnejfn"})
    })
    app.get("/home",(req,res)=>{
               return  res.json({message:"i am a small process"})

    })
    app.listen(3000,()=>{
        console.log("server is running on the port 3000")
    })
}