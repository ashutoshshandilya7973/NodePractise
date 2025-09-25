

const nextUse=(req,res,next)=>{
    const id=req.params
    console.log(id)
    if(Number(id.id)>0){
         return next()
        console.log("i will run after calling next")
        console.log("i will run again after calling next")

    }
    else{
        throw new Error("error while prsing the middleware")
    }
}

export {nextUse}