import fs from "fs/promises"
setTimeout(()=>console.log("hihi"),1000)
const text=await fs.readFile("text.jpeg");
console.log(text)
console.log("ashu")