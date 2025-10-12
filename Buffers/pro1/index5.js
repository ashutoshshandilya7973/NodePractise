import EventEmitter from "events";

const x=new EventEmitter();

x.on("ashu",()=>{
    console.log("ashu event is fired")
})

for(let i=0;i<5;i++){
    if(i%2===0){
        x.emit("ashu")
    }
}